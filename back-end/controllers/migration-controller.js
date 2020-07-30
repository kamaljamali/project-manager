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
Controller.migrate = async function migrate(req, res, next) {
    const basePath = 'back-end/migrations';
    let files = FS.readdirSync(rPath(basePath))
        .filter(file => Path.extname(file).toLowerCase() == '.js');

    /* Filter by migration name */
    const migration = req.query.migration;
    if (migration) {
        files = files.filter(x => Path.basename == migration);
    }

    for (let fileIndex in files) {
        const file = rPath(basePath, files[fileIndex]);
        const Migration = use(file);

        await Migration.migrate()
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
    const basePath = 'back-end/migrations';
    let files = FS.readdirSync(rPath(basePath))
        .filter(file => Path.extname(file).toLowerCase() == '.js');

    /* Filter by migration name */
    const migration = req.query.migration;
    if (migration) {
        files = files.filter(x => Path.basename == migration);
    }

    for (let fileIndex in files) {
        const file = rPath(basePath, files[fileIndex]);
        const Migration = use(file);

        await Migration.rollback();
    }

    res.sendStatus(200);
};

