'use strict';

const RedisStore = require('connect-redis');
const RedisHelper = use('core/helpers/redis-helper');

/**
 * Session store class
 */
function SessionStore() { }
module.exports = SessionStore;

/**
 * Init session-store
 * @param {Object} session Session object
 * @param {Object} config Config object
 */
SessionStore.make = function make(session, config) {
    return new Promise((resolve, reject) => {
        /* Create a new instance of redis-client */
        new RedisHelper.create()
            .then(redisClient => {
                /* Try to create redis-store */
                const redisStore = RedisStore(session);
                const result = new redisStore({
                    client: redisClient.client
                });

                resolve(result);
            })
            .catch(err => reject(err));
    });
};
