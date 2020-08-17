<template lang="pug">
.container.project-container
    .container(v-show="isViewMode")
        nav.navabr
            button.button.is-primary(@click.prevent="newProject()") +
        project-list(v-model="projects")

    .container(v-if="isRegisterMode")
        new-project(v-model="tempProject" @on-register="newProjectRegister" @on-cancel="newProjectCancel")
        
</template>

<script>
import ProjectList from "@VUEC/test/project-list.vue";
import NewProject from "@VUEC/test/new-project.vue";

export default {
    name: "ProjectManager",

    components: {
        ProjectList,
        NewProject,
    },

    data: () => ({
        FORM_MODES: {
            VIEW: 1,
            REGISTER: 2,
        },
        formMode: null,
        projects: [],
        tempProject: null,
    }),

    computed: {
        isViewMode: (state) => state.formMode == state.FORM_MODES.VIEW,
        // isViewMode(state) {
        //     return state.formMode == state.FORM_MODES.VIEW;
        // },
        isRegisterMode: (state) => state.formMode == state.FORM_MODES.REGISTER,
    },

    /**
     * Create
     */
    created() {
        this.setViewMode();
    },

    methods: {
        /**
         * Add new project
         */
        newProjectRegister(payload) {
            Vue.set(this.projects, this.projects.length, this.tempProject);
            this.setViewMode();
        },

        /**
         * Cancel registration
         */
        newProjectCancel(payload) {
            this.setViewMode();
        },

        /**
         * New project
         */
        newProject() {
            Vue.set(this, "tempProject", {});
            this.setRegisterMode();
        },

        /**
         * Set register mode
         */
        setRegisterMode() {
            Vue.set(this, "formMode", this.FORM_MODES.REGISTER);
        },

        /**
         * Set view mode
         */
        setViewMode() {
            Vue.set(this, "formMode", this.FORM_MODES.VIEW);
        },
    },
};
</script>

<style scoped>
.project-container {
    margin-top: 2em;
    direction: ltr;
    color: white;
}
</style>
