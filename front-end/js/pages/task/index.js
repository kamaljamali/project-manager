'use strict';

import TaskManager from '@VUEC/task/task-manager.vue'

/**
 * Page module
 */
export default function Page() { }

/**
 * Initialize
 */
Page.init = function init() {

    new Vue({
        el: '#app',

        components: {
            TaskManager
        }
    });
};

Page.init();