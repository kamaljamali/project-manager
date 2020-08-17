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
Controller.index = function index(req, res, next) {
    const code = req.params.projectId;

    res.render('pages/task/task.pug', {
        req,
        projectId: code
    });
};
