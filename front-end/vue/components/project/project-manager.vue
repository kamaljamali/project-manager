<template lang="pug">
.container-child
    load-project(ref="loadProject")
</template>

<script>
import LoadProject from "@VUEC/project/load-project.vue";

export default {
    name: "ProjectManager",

    data: () => ({}),

    components: {
        LoadProject,
    },

    // props: {
    //     projectLoadUrl: {
    //         type: String,
    //         default: null,
    //     },
    // },

    mounted() {
        this.init();
    },

    methods: {
        /**
         * Initialization
         */
        init() {
            // const url = this.projectLoadUrl.replace("#Key#", "Value");
            this.$refs.loadProject.loadData();
        },
    },
};
</script>

<style scoped>
</style>
