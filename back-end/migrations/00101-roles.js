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
                _id: Mongoose.Types.ObjectId('5f1fcd4af94a3279d358234b'),
                name: 'admin',
                rules: [
                    Mongoose.Types.ObjectId('56cb91bdc3464f14678934cc')
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
