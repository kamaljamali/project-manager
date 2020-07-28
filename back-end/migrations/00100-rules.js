'use strict';

/**
 * Migration class
 */
function Migration() {}
module.exports = Migration;

/**
 * Migrate function
 */
Migration.migrate = function migrate() {
    return new Promise((resolve, reject) => {
        try {
            const User = db.model('Rule');
            const rules = use('back-end/migrations/resources/rules.json');

            User.create(rules);

            resolve();
        } catch (err) {
            reject(err);
        }
    });
};

/**
 * Rollback function
 */
Migration.rollback = function rollback() {
    return new Promise((resolve, reject) => {
        try {
            const User = db.model('Rule');

            User.deleteMany({}, (e, r) => {
                if (e) {
                    reject(e);
                } else {
                    resolve(r);
                }
            });
        } catch (err) {
            reject(err);
        }
    });
};
