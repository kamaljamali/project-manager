'use strict';

const mongoose = require('mongoose');

/**
 * Algorithm controller
 */
function TaskApiHelper() { }
module.exports = TaskApiHelper;

/**
 * find Load data 
 */
TaskApiHelper.LoadTaskData = function LoadTaskData(projectId, employeeId) {
    const Task = mongoose.model('Task');
    let filterQuery = {};

    if (employeeId === "*") {
        filterQuery = {
            project_id: projectId
        };
    } else {
        filterQuery = {
            project_id: projectId,
            employee_id: employeeId
        };
    }
    console.log(filterQuery)
    const projection = {};

    return new Promise((resolve, reject) => {
        Task.find(filterQuery, projection, { sort: { '_id': -1 } })
            .then(res => {
                if (res.length > 0) {
                    const data = res;
                    resolve(data);
                } else {
                    resolve([]);
                }
            })
            .catch(err => reject(err));
    });
};
/**
 * delete data 
 */
TaskApiHelper.DeleteTaskData = function DeleteTaskData(id) {
    const Task = mongoose.model('Task');
    const filterQuery = {
        _id: id
    };

    return new Promise((resolve, reject) => {
        Task.findByIdAndDelete(filterQuery)
            .then(res => {
                if (res.length > 0) {
                    const data = res;
                    resolve(data);
                } else {
                    resolve({});
                }
            })
            .catch(err => reject(err));
    });
};
/**
 * insert data
 */
TaskApiHelper.InsertTaskData = async function InsertTaskData(
    data
) {
    const Task = mongoose.model("Task");
    const task = new Task(data);

    let res = await task.save();

    return res;
};
