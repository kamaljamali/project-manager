<template lang="pug">

.container-child
    .container(v-show="isViewMode")
      load-employee(v-model="employees")
      br
      a.button.is-success(href="#", @click.prevent="addNewEmployee")
        i.fa.fa-plus

    .container(v-if="isRegisterMode")
      add-employee(v-model="newEmployee" @on-register="newEmployeeRegister" @on-register-cancel="newEmployeeCancel")    

</template>

<script>
import LoadEmployee from "@VUEC/employee/load-employee.vue";
import AddEmployee from "@VUEC/employee/add-employee.vue";

export default {
    name: "EmployeeManager",

    data: () => ({
        FORM_MODES: {
            VIEW: 1,
            REGISTER: 2,
        },
        formMode: null,

        employees: [],
        newEmployee: {},
    }),

    components: {
        LoadEmployee,
        AddEmployee,
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

        addNewEmployee() {
            Vue.set(this, "newEmployee", {});
            this.setRegisterMode();
        },

        newEmployeeRegister() {
            Vue.set(this.employees, this.employees.length, this.newEmployee);
            this.setViewMode();
        },
        newEmployeeCancel() {
            this.setViewMode();
        },
    },
};
</script>

<style scoped></style>
