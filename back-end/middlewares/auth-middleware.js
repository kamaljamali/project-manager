'use strict';

/**
 * Apply security
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Function} next Next() callback
 */
module.exports = function apply(req, res, next) {
    const auth = req.session.auth;

    if (null == auth) {
        let path = Router.routePath('auth.login');
        res.redirect(path);
    } else {
        next();
    }
};
