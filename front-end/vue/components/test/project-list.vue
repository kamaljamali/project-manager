<template lang="pug">
.container
    pre {{ value }}
    ul
        li(v-for="project in value" :key="project.name")
            | {{ project.name }} {{ project.executor }}
            br
            button.button-is-danger(@click.prevent="deleteProject(project)") Delete
</template>

<script>
import ProjectHelper from "@REQUEST/project/load-project-helper";

export default {
    name: "ProjectList",

    props: {
        value: {
            type: Array,
            default: () => [],
        },
    },

    data: () => ({
        projects: [],
    }),

    /**
     * Created
     */
    created() {
        Vue.set(this, "projects", this.value);
        Promise.all([this.loadData()]);
    },

    methods: {
        /**
         * Delete a project
         */
        deleteProject(project) {
            let confirmed = confirm("Are you sure?");
            if (confirmed) {
                const index = this.value.findIndex(
                    (x) => x.name == project.name
                );

                if (index > -1) {
                    Vue.delete(this.value, index);
                }
            }
        },

        /**
         * Load data
         */
        async loadData() {
            let result = await ProjectHelper.loadProjects();

            this.$emit("input", result);
        },
    },
};
</script>
