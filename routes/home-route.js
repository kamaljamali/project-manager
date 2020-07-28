'use strict';

/* Get Home router */
let router = Router.router('home');
router.get('/', 'home@index', 'home.index');


/* Get default router */
let publicrouter = Router.router();
publicrouter.get('/', 'home@splash', 'home.splash');
