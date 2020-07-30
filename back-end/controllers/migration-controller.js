'use strict';

const FS = require('fs');
const Path = require('path');
const C_EXTENTION = '.js';
const C_BASEPATH = 'back-end/migrations';

/**
 * Controller
 */
function Controller() {}
module.exports = Controller;

/**
 * Migrate action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.migrate = async function migrate(req, res, next) {
    const files = Controller.getFilesList(req, C_BASEPATH);

    for (let fileIndex in files) {
        const file = rPath(C_BASEPATH, files[fileIndex]);
        const Migration = use(file);

        try {
            await Migration.migrate();
        } catch (err) {
            console.error(err);
        }
    }

    res.sendStatus(200);
};

/**
 * Rollback action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.rollback = async function rollback(req, res, next) {
    const files = Controller.getFilesList(req, C_BASEPATH);

    for (let fileIndex in files) {
        const file = rPath(C_BASEPATH, files[fileIndex]);
        const Migration = use(file);

        try {
            await Migration.migrate();
        } catch (err) {
            console.error(err);
        }
    }

    res.sendStatus(200);
};

/**
 * Get files list
 * @param {Request} req Request
 */
Controller.getFilesList = function getFilesList(req, basePath) {
    let files = FS.readdirSync(rPath(basePath))
        .filter(file => Path.extname(file).toLowerCase() === C_EXTENTION);

    /* Filter by migration name */
    const migration = req.query.migration;
    if (migration) {
        files = files.filter(x => Path.basename(x, C_EXTENTION) == migration);
    }

    return files;
}
