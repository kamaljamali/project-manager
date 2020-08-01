'use strict';

/**
 * Base filter
 */
function BaseFilter() { }
module.exports = BaseFilter;

/**
 * Filter function
 * @param {Object} data data
 * @param {Function} filterFnc Filter function
 */
BaseFilter.filter = function filter(data, filterFnc) {
    return new Promise((resolve, reject) => {
        let isArray = Array.isArray(data);

        if (!isArray) {
            data = [data];
        }

        data = data.map(filterFnc);

        if (!isArray) {
            resolve(data[0]);
        }
        else {
            resolve(data);
        }
    });
};
