'use strict';

import GanttChart from '@VUEC/gantt-chart/gantt-chart-manager.vue'

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
            GanttChart
        }
    });
};

Page.init();