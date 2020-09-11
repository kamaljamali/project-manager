'use strict';
const ProjectApiHelper = use('back-end/helpers/project-api-helper');

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
    res.render('pages/gantt-chart/index.pug', {
        req,
    });
};
