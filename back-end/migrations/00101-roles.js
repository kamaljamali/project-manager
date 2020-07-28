'use strict';

const Mongoose = require('mongoose');

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
            const Role = db.model('Role');

            Role.create({
                name: 'admin',
                rules: [
                    Mongoose.ObjectId('56cb91bdc3464f14678934cc')
                ]
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
            const Role = db.model('Role');

            Role.deleteMany({}, (e, r) => {
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
