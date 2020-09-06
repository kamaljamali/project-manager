'use strict';
const EmployeeApiHelper = use('back-end/helpers/employee-api-helper');

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
    res.render('pages/employee/employee.pug', {
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
    EmployeeApiHelper.LoadEmployeeData()
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
Controller.deleteEmployee = function deleteEmployee(req, res, next) {
    const id = req.params.id;
    EmployeeApiHelper.DeleteEmployeeData(id)
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
        name: req.body.name,
    };
    EmployeeApiHelper.InsertEmployeeData(data)
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
