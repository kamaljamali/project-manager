'use strict';

const _ = require('lodash');
const Path = require('path');
const DotEnv = require('dotenv');

/**
 * Module
 */
function Core() { }
module.exports = Core;

/**
 * Boot function
 */
Core.boot = function boot(Bootstrap) {
    return new Promise((resolve, reject) => {
        DotEnv.config();

        global.isProductionMode = Core.isProductionMode;
        global.rPath = Core.rPath;
        global.use = Core.use;
        global.config = Core.config;

        resolve();
    });
};

/**
 * Is production mode
 */
Core.isProductionMode = function isProductionMode() {
    return (process.env.NODE_ENV == 'production');
};

/**
 * Relative path
 */
Core.rPath = function rPath() {
    return Path.resolve(...arguments);
};

/**
 * Ues a module
 */
Core.use = function use() {
    const path = Core.rPath(...arguments);
    return require(path);
};

/**
 * Load config data
 */
Core.config = function config(name, attrPath, defaultVal) {
    const configData = Core.use('config', name);

    if (null != attrPath) {
        return _.get(configData, attrPath, defaultVal);
    } else {
        return configData || defaultVal;
    };
};
