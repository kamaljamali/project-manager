<template lang="pug">

    div
        //- div(v-if='!destroy')
        div
            //- gantt-elastic(:tasks='tasks', :options='options', :dynamic-style='dynamicStyle')
            gantt-elastic(:tasks='tasks', :options='options' )
            //- gantt-header(slot='header')
            //- gantt-footer(slot='footer')

</template>

<script>
import GanttElastic from "gantt-elastic";
import Header from "gantt-elastic-header";
import GanttChartHelper from "@REQUEST/gantt-chart/gantt-chart-helper.js";

export default {
    name: "GanttChartManager",

    data: () => ({
        tasks: [],

        options: {},
    }),

    components: {
        // GanttElasticHeader: { template: `<span>your header</span>` }, // or Header
        GanttElastic,
        // GanttElasticFooter: { template: `<span>your footer</span>` },
    },

    computed: {},

    /**
     * created
     */
    created() {
        this.loadData();
    },

    /**
     * mounted
     */
    mounted() {},

    methods: {
        /**
         * Load Results
         */
        async loadData() {
            const data = await GanttChartHelper.loadTasks("url");
            Vue.set(this, "tasks", data.tasks);
            Vue.set(this, "options", data.options);
        },
    },
};
</script>

<style scoped></style>
