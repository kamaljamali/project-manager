'use strict';

const Http = require('http');
const Https = require('https');
const FS = require('fs');

/**
 * Server module
 */
function Server() {}
module.exports = Server;

/**
 * Boot function
 * @param {Object} Bootstrap Bootstrap instance
 */
Server.boot = function boot(Bootstrap) {
    return new Promise((resolve, reject) => {
        const Config = global.config('core/server');

        Server.listen(Config);

        resolve();
    });
};

/**
 * Listen
 * @param {Object} Config Config object
 */
Server.listen = function listen(Config) {
    let server = (Config.https == "true") ?
        Server.startHttps(Config) :
        Server.startHttp(Config);

    server.listen(Config.port, () => {
        Logger.info(`Server started at port ${Config.port}`);
    });
};

/**
 * Start Http engine
 * @param {Object} Config Config object
 */
Server.startHttp = function startHttp(Config) {
    const httpServer = Http.createServer(global.App);

    Logger.info('Create Http Server');
    return httpServer;
};

/**
 * Start Https engine
 * @param {Object} Config Config object
 */
Server.startHttps = function startHttps(Config) {
    const options = {
        key: FS.readFileSync(rPath('config/core/ssl/key.pem')),
        cert: FS.readFileSync(rPath('config/core/ssl/cert.pem')),
        dhparam: FS.readFileSync(rPath('config/core/ssl/dhparam.pem'))
    };
    const httpsServer = Https.createServer(options, global.App);

    Logger.info('Create Https Server');
    return httpsServer;
};
