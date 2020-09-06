'use strict';
const AxiosHelper = require("@HELPERS/axios-helper");
export default function EmployeeHelper() { }

/**
 * load data
 */
EmployeeHelper.loadEmployees = async function loadEmployees(url) {

    return new Promise((resolve, reject) => {
        AxiosHelper.send("get", url).then((res) => {
            if (res.data.success) {
                resolve(res.data.data);
            }
            else {
                resolve([]);
            }
        })
            .catch((err) => {
                reject(err)
            });
    });
};
/**
 * delete data
 */
EmployeeHelper.deleteEmployee = async function deleteEmployee(url) {
    return new Promise((resolve, reject) => {
        AxiosHelper.send("delete", url).then((res) => {
            if (res.data.success) {
                resolve(res.data.data);
            }
            else {
                resolve([]);
            }
        })
            .catch((err) => {
                reject(err)
            });
    });
};
/**
 * insert data
 */
EmployeeHelper.insertEmployee = async function insertEmployee(url, data) {
    return new Promise((resolve, reject) => {
        AxiosHelper.send("post", url, data).then((res) => {
            if (res.data.success) {
                resolve(res.data.data);
            }
            else {
                resolve([]);
            }
        })
            .catch((err) => {
                reject(err)
            });
    });
};