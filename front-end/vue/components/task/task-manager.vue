<template lang="pug">

.container-child
    .container
        load-employee(v-model="employees" v-on:resultTaskFromEmployee="resultTaskFromEmployee")
    br
    .container(v-show="isViewMode")
      load-task(ref="loadTask" v-model="tasks" :project-id="projectId")
      br
      a.button.is-success(href="#", @click.prevent="addNewTask")
        i.fa.fa-plus

    .container(v-if="isRegisterMode")
      add-task(v-model="newTask" :project-id="projectId" @on-register="newTaskRegister" @on-register-cancel="newTaskCancel")    

</template>

<script>
import LoadTask from "@VUEC/task/load-task.vue";
import AddTask from "@VUEC/task/add-task.vue";
import LoadEmployee from "@VUEC/employee/load-employee";

export default {
    name: "TaskManager",

    data: () => ({
        FORM_MODES: {
            VIEW: 1,
            REGISTER: 2,
        },
        formMode: null,

        tasks: [],
        newTask: {},
        employees: [],
    }),

    components: {
        LoadTask,
        AddTask,
        LoadEmployee,
    },

    props: {
        projectId: {
            type: String,
            default: null,
        },
    },

    computed: {
        isViewMode: (state) => state.formMode == state.FORM_MODES.VIEW,
        // isViewMode(state) {
        //     return state.formMode == state.FORM_MODES.VIEW;
        // },
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

        addNewTask() {
            Vue.set(this, "newTask", {});
            this.setRegisterMode();
        },

        newTaskRegister() {
            Vue.set(this.tasks, this.tasks.length, this.newTask);
            this.setViewMode();
        },
        newTaskCancel() {
            this.setViewMode();
        },
        resultTaskFromEmployee(employee) {
            this.$refs.loadTask.loadData(employee);
        },
    },
};
</script>

<style scoped></style>
