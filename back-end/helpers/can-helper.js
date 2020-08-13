"use strict";

/**
 * Crypto Helper function
 */
function CanHelper() {}
module.exports = CanHelper;

/**
 * Check for abilities
 * @param {Array} canList Can List
 */
CanHelper.can = function can(perimission, req, data) {
    const Permission = use(`back-end/permissions/${perimission}`);

    return Permission(req, data);
};
