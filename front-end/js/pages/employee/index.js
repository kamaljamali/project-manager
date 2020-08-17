'use strict';

import EmployeeManager from '@VUEC/employee/employee-manager.vue'

/**
 * Page module
 */
export default function Page() {}

/**
 * Initialize
 */
Page.init = function init() {
    new Vue({
        el: '#app',

        components: {
            EmployeeManager
        }
    });
};

Page.init();