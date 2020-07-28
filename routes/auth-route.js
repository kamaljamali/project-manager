'use strict';

/* Get Home router */
const router = Router.router('auth');

router.get('/login', 'auth@login', 'auth.login');
router.get('/attempt', 'auth@attempt', 'auth.attempt');
router.get('/logout', 'auth@logout', 'auth.logout');
