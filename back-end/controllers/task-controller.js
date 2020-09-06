'use strict';
const TaskApiHelper = use('back-end/helpers/task-api-helper');

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

/**
 * load task
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.loadTask = function loadTask(req, res, next) {
    const projectId = req.params.projectId;
    const employeeId = req.params.employeeId;
    TaskApiHelper.LoadTaskData(projectId, employeeId)
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
Controller.deleteTask = function deleteTask(req, res, next) {
    const id = req.params.id;
    TaskApiHelper.DeleteTaskData(id)
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
        description: req.body.description,
        project_id: req.body.project_id,
        employee_id: req.body.employee_id,
        cast: req.body.cast,
        start: req.body.start,
        appointedTime: req.body.appointedTime,
        finishTime: req.body.finishTime,
    };

    TaskApiHelper.InsertTaskData(data)
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
