'use strict';

const Path = require('path');

/**
 * Boot strap function
 */
function Bootstrap() {}
module.exports = Bootstrap;

/**
 * Boot function
 */
Bootstrap.boot = function boot() {
    return new Promise((resolve, reject) => {
        const config = require(Path.resolve('config/core/bootstrap'));

        global.Logger = console;
        Bootstrap.loadModules(config);

        resolve();
    });
};

/**
 * Load modules
 * @param {Object} config Config data
 */
Bootstrap.loadModules = function loadModules(config) {
    const path = Path.resolve(__dirname, 'modules');
    const modules = Object.keys(config.modules)
        .sort()
        .map(x => config.modules[x]);

    modules.forEach(module => {
        const fullPath = Path.resolve(path, module);

        /* Check module exists */
        const ModuleFile = require(fullPath);

        if (!ModuleFile) {
            Logger.error('Module not found ' + fullPath);
            process.exit(1);
        } else {
            ModuleFile.boot(Bootstrap);
            Logger.info(`Module ${module} loaded successfully`);
        }
    });
};
