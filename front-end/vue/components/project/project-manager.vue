<template lang="pug">

.container-child
    .container(v-show="isViewMode")
      load-project(v-model="projects")
      br
      a.button.is-success(href="#", @click.prevent="addNewProject")
        i.fa.fa-plus

    .container(v-if="isRegisterMode")
      add-project(v-model="newProject" @on-register="newProjectRegister" @on-register-cancel="newProjectCancel")    

</template>

<script>
import LoadProject from "@VUEC/project/load-project.vue";
import AddProject from "@VUEC/project/add-project.vue";

export default {
    name: "ProjectManager",

    data: () => ({
        FORM_MODES: {
            VIEW: 1,
            REGISTER: 2,
        },
        formMode: null,

        projects: [],
        newProject: {},
    }),

    components: {
        LoadProject,
        AddProject,
    },

    computed: {
        isViewMode: (state) => state.formMode == state.FORM_MODES.VIEW,
        isRegisterMode: (state) => state.formMode == state.FORM_MODES.REGISTER,
    },

    /**
     * created
     */
    created() {
        this.setViewMode();
    },

    /**
     * mounted
     */
    mounted() {},

    methods: {
        setViewMode() {
            Vue.set(this, "formMode", this.FORM_MODES.VIEW);
        },

        setRegisterMode() {
            Vue.set(this, "formMode", this.FORM_MODES.REGISTER);
        },

        addNewProject() {
            Vue.set(this, "newProject", {});
            this.setRegisterMode();
        },

        newProjectRegister() {
            Vue.set(this.projects, this.projects.length, this.newProject);
            this.setViewMode();
        },
        newProjectCancel() {
            this.setViewMode();
        },
    },
};
</script>

<style scoped></style>
