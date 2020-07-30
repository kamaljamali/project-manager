'use strict';

const FS = require('fs');
const Path = require('path');

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
Controller.migrate = function migrate(req, res, next) {
    const basePath = 'back-end/migrations';
    const files = FS.readdirSync(rPath(basePath))
        .filter(file => Path.extname(file).toLowerCase() == '.js');

    for (let fileIndex in files) {
        const file = rPath(basePath, files[fileIndex]);
        const Migration = use(basePath, file);

        Migration.migrate();
    }

    res.sendStatus(200);
};

/**
 * Rollback action
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {Function} next Callback
 */
Controller.rollback = function rollback(req, res, next) {
    const basePath = 'back-end/migrations';
    const files = FS.readdirSync(rPath(basePath))
        .filter(file => Path.extname(file).toLowerCase() == '.js');

    for (let fileIndex in files) {
        const file = rPath(basePath, files[fileIndex]);
        const Migration = use(basePath, file);

        Migration.rollback();
    }

    res.sendStatus(200);
};
