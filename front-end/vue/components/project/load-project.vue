<template lang="pug">
div
    multi-text-project
    table.table
        thead
            tr
                th نام پروژه
                th مجری
                th زمان مقرر شده
                th زمان اتمام
        tbody
            tr(v-for="data in results")
                td {{ data.name }}
                td {{ data.executor }}
                td {{ data.appointedTime }}
                td {{ data.finishTime }}
</template>

<script>
import MultiTextProject from "@VUEC/project/multi-text-project.vue";
import LoadProjectHelper from "@REQUEST/project/load-project-helper.js";

export default {
    name: "LoadProjectData",

    data: () => ({
        results: [],
    }),

    // props: {
    //     loadProjectUrl: {
    //         type: String,
    //         default: "",
    //     },
    // },
    components: {
        MultiTextProject,
    },

    methods: {
        /**
         * Load Results
         */
        async loadData() {
            try {
                let data = await LoadProjectHelper.loadResults();

                Vue.set(this, "results", data);
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style scoped>
</style>
