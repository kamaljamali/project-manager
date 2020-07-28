'use strict';

/**
 * Controller
 */
function Controller() { }
module.exports = Controller;

/**
 * Index action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.login = function login(req, res, next) {
    res.render('auth/login.pug');
};
