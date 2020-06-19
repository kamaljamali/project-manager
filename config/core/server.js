'use strict';

const C_HOST = 'localhost';

/**
 * IS-NULL function
 * @param {Object} value Object
 * @param {Object} defaultValue Default value
 */
function isNULL(value, defaultValue) {
    return value ? value : defaultValue;
}

/**
 * Export config
 */
module.exports = {
    https: isNULL(process.env.SERVER_HTTPS, false),
    port: isNULL(process.env.SERVER_PORT, 8585),
    host: isNULL(process.env.SERVER_HOST, C_HOST),

    express: {
        publicFolder: process.env.EXPRESS_PUBLIC || 'public',
        viewsFolder: process.env.EXPRESS_VIEWS_PATH || 'front-end/views',
        compression: process.env.SERVER_COMPRESSION || 'gzip'
    },

    logger: {
        path: process.env.LOGGER_PATH || 'logs',
        level: process.env.LOGGER_LEVEL || 'silly'
    },

    redis: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT,
        password: process.env.PASSWORD,
        db: isNULL(process.env.DB, 0),
        url: process.env.URL
    },

    session: {
        sessionType: isNULL(process.env.SESSION_TYPE, 'memory'),
        resave: isNULL(process.env.SESSION_RESAVE, false),
        saveUninitialized: isNULL(process.env.SESSION_SAVE_UNINITIALIZED, true),
        secret: process.env.SESSION_SECRET || '$3crtKE`/00Sun53t',
        path: process.env.SESSION_PATH || '/',
        httpOnly: process.env.SESSION_HTTP_ONLY || true,
        secure: isNULL(process.env.SESSION_SECURE, process.env.SERVER_HTTPS) == true,
        maxAge: process.env.SESSION_MAX_AGE || (60000 * 15)
    },

    database: {
        driver: 'mongodb',
        lazyConnect: isNULL(process.env.DB_LAZY_CONNECT, false)
    }
};