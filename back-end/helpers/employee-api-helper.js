'use strict';

const mongoose = require('mongoose');

/**
 * Algorithm controller
 */
function EmployeeApiHelper() { }
module.exports = EmployeeApiHelper;

/**
 * find Load data 
 */
EmployeeApiHelper.LoadEmployeeData = function LoadEmployeeData() {
    const Employee = mongoose.model('Employee');
    const filterQuery = {};
    const projection = {};

    return new Promise((resolve, reject) => {
        Employee.find(filterQuery, projection, { sort: { '_id': -1 } })
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
EmployeeApiHelper.DeleteEmployeeData = function DeleteEmployeeData(id) {
    const Employee = mongoose.model('Employee');
    const filterQuery = {
        _id: id
    };

    return new Promise((resolve, reject) => {
        Employee.findByIdAndDelete(filterQuery)
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
EmployeeApiHelper.InsertEmployeeData = async function InsertEmployeeData(
    data
) {
    const Employee = mongoose.model("Employee");
    const emp = new Employee(data);

    let res = await emp.save();

    return res;
};
