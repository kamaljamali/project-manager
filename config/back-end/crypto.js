'use strict';

/**
 * Exports
 */
module.exports = {
    crypto_key: process.env.CRYPTO_KEY || ('crypto_key' + Math.random().toString()),
    crypto_algorithm: process.env.CRYPTO_ALGORITHM || 'aes-128-cbc'
};
