'use strict';

const Mongoose = require('mongoose');
const CryptoHelepr = use('back-end/helpers/crypto');

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
                _id: Mongoose.Types.ObjectId("5f1fd070e0efdd7db92f4251"),
                name: 'root',
                pwd: CryptoHelepr.encrypt('123456'),
                email: 'root@qeng.ir',
                roles: [
                    Mongoose.Types.ObjectId('5f1fcd4af94a3279d358234b')
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
