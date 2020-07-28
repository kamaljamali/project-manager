'use strict';

/* Get Migration router */
let router = Router.router('migration');

router.get('/migrate', 'migration@migrate', 'migration.migrate');
router.get('/rollback', 'migration@rollback', 'migration.rollback');
