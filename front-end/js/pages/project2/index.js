'use strict';

import ProjectManager from '@VUEC/test/project-manager.vue'

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
            ProjectManager
        }
    });
};

Page.init();