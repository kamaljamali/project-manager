'use strict';
const AxiosHelper = require("@HELPERS/axios-helper");
export default function ProjectHelper() { }

/**
 * load data
 */
ProjectHelper.loadProjects = async function loadProjects(url) {

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
ProjectHelper.deleteProject = async function deleteProject(url) {
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
ProjectHelper.insertProject = async function insertProject(url, data) {
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