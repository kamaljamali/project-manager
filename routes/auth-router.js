'use strict';

/* Get Home router */
let router = Router.router('auth');
router.get('/login', 'auth@login', 'auth.login');
