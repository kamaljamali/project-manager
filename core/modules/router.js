'use strict';

const Express = require('express');
const FS = require('fs');
const RouterHelper = use('core/helpers/router-helper');

const C_DEF_ROUTE = '';

/**
 * Router module
 */
function Router() {}
module.exports = Router;

// /* Defaults */
Router._routes = {};
Router._routers = {};

/**
 * Boot function
 * @param {Object} Bootstrap Bootstrap module
 */
Router.boot = function boot(Bootstrap) {
    return new Promise((resolve, reject) => {
        global.Router = Router;
        Router.loadRoutes();
        Router.addEventHandler();

        resolve(Router);
    });
};

/**
 * Load routers
 */
Router.loadRoutes = function loadRoutes() {
    const path = rPath('routes');
    const routes = FS.readdirSync(path);

    /* Load routes */
    routes.forEach(route => use(path, route));

    /* Use routes */
    Object.keys(Router._routers)
        .forEach(routerName => {
            const router = Router._routers[routerName];
            let rName = routerName;

            if (!rName.startsWith('/')) {
                rName = '/' + rName;
            }

            if (router.router != global.App) {
                router.__baseRoute = rName;
                global.App.use(rName, router.router);
            }
        });
};

/**
 * addEventHandler
 */
Router.addEventHandler = function addEventHandler() {
    /* Add Error handler */
    global.App.use((err, req, res, next) => {
        if (Router.isAjax(req)) {
            res.status(500)
                .send("Internal server error")
                .end();
        } else if (req.accepts('html')) {
            res.render('errors/500.pug', {
                url: req.url,
                err
            });
        } else {
            res.type('txt')
                .send('Internal server error');
        }
    });

    /* Add Not found handler */
    global.App.use((req, res, next) => {
        if (Router.isAjax(req)) {
            res.status(404)
                .send("The requested route doesn't exist")
                .end();
        } else if (req.accepts('html')) {
            res.render('errors/404.pug', {
                url: req.url
            });
        } else {
            res.type('txt')
                .send('Not found');
        }
    });
};

/**
 * isAjax
 * @param {Request} req The request
 */
Router.isAjax = function isAjax(req) {
    return req.xhr ||
        (req.headers.accept.indexOf('json') > -1);
}

/* Get/New router */
Router.router = function router(groupName) {
    groupName = groupName || C_DEF_ROUTE;
    let router = Router._routers[groupName];

    if (null == router) {
        router = (C_DEF_ROUTE == groupName) ? global.App : Express.Router();
        router = RouterHelper.newRouter(Router, router, groupName);
        Router._routers[groupName] = router;
    }

    return router;
};

/**
 * Add new route alias
 * @param {Object} router Router object
 * @param {String} alias Alias
 */
Router.addRoute = function addRoute(router, alias, groupName) {
    Router._routes[alias] = {
        router,
        groupName
    };
};

/**
 * Return route by alias
 * @param {Object} router Router object
 * @param {String} alias Alias
 */
Router.route = function route(alias) {
    return Router._routes[alias];
};

/**
 * Get router path
 * @param {Object} router Router object
 * @param {String} alias Alias
 */
Router.routePath = function routePath(alias) {
    let {
        groupName,
        router
    } = Router.route('auth.login');

    groupName = groupName || '';
    const path = `${global.serverUrl}/${groupName}${router.route.path}`;

    return path;
};
