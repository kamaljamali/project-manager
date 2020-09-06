'use strict';
const AxiosHelper = require("@HELPERS/axios-helper");

export default function TaskHelper() { }

/**
 * load data
 */
TaskHelper.loadTasks = async function loadTasks(url) {
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
TaskHelper.deleteTask = async function deleteTask(url) {
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
TaskHelper.insertTask = async function insertTask(url, data) {
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