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
            const User = db.model('User');

            User.create({
                name: 'root',
                pwd: CryptoHelepr.encrypt('123456'),
                email: 'root@qeng.ir'
            }, (e, r) => {
                if (e) {
                    reject(e)
                } else {
                    resolve(r);
                }
            });
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
            const User = db.model('User');

            User.remove({
                name: 'root'
            }, (e, r) => {
                if (e) {
                    reject(e)
                } else {
                    resolve(r);
                }
            });
        } catch (err) {
            reject(err);
        }
    });
};
