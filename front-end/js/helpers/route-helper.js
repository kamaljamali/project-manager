'use strict';

/**
 * Route helper
 */
function RouteHelper() { }
module.exports = RouteHelper;

/**
 * Get full route-path
 * @param {String} alias Route alias
 */
RouteHelper.routePath = function routePath(alias) {
    if (!RouteHelper.routeManfiest) {
        RouteHelper.routeManfiest = require('@PUBLIC/route-manifest.json');
    }

    return (RouteHelper.routeManfiest[alias] || {}).route || '';
};
