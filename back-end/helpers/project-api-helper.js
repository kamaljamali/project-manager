'use strict';

const mongoose = require('mongoose');

/**
 * Algorithm controller
 */
function ProjectApiHelper() { }
module.exports = ProjectApiHelper;

/**
 * find Load data 
 */
ProjectApiHelper.LoadProjectData = function LoadProjectData() {
    const Project = mongoose.model('Project');
    const filterQuery = {};
    const projection = {};

    return new Promise((resolve, reject) => {
        Project.find(filterQuery, projection, { sort: { '_id': -1 } })
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
ProjectApiHelper.DeleteProjectData = function DeleteProjectData(id) {
    const Project = mongoose.model('Project');
    const filterQuery = {
        _id: id
    };

    return new Promise((resolve, reject) => {
        Project.findByIdAndDelete(filterQuery)
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
ProjectApiHelper.InsertProjectData = async function InsertProjectData(
    data
) {
    const Project = mongoose.model("Project");
    const project = new Project(data);

    let res = await project.save();

    return res;
};
