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
    res.render('pages/project/project.pug', {
        req,
    });
};
/**
 * load action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.loadData = function loadData(req, res, next) {
    ProjectApiHelper.LoadProjectData()
        .then(data => {
            const result = {
                success: true,
                data: data
            };
            res.status(200)
                .send(result)
                .end();
        })
        .catch(err => console.error(err));
};
/**
 * delete action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.deleteProject = function deleteProject(req, res, next) {
    const id = req.params.id;
    ProjectApiHelper.DeleteProjectData(id)
        .then(data => {
            const result = {
                success: true,
                data: data
            };
            res.status(200)
                .send(result)
                .end();
        })
        .catch(err => console.error(err));
};
/**
 * store action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.store = function store(req, res, next) {
    const data = {
        ID: req.body.ID,
        name: req.body.name,
        start: req.body.start,
        appointedTime: req.body.appointedTime,
        finishTime: req.body.finishTime,
    };
    ProjectApiHelper.InsertProjectData(data)
        .then(data => {
            const result = {
                success: true,
                data: data
            };
            res.status(200)
                .send(result)
                .end();
        })
        .catch(err => console.error(err));
};
