'use strict';

const AuthMiddleware = use('back-end/middlewares/auth-middleware');

/* Get Migration router */
let router = Router.router('migration');

router.get('/migrate', [
    AuthMiddleware,
    'migration@migrate'
], 'migration.migrate');

router.get('/rollback', [
    AuthMiddleware,
    'migration@rollback'
], 'migration.rollback');
