<template lang="pug">
div
    .field
        .control
            .select.is-success
                select(@change="onChangeEmployee($event)")
                    option(value="*") *
                    option(v-for="data in value" :value="data.name") {{ data.name }}

    //- table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth
    //-     thead
    //-         tr
    //-             th نام
    //-             th حذف
    //-     tbody
    //-         tr(v-for="data in value" :Key="data.name")
    //-             td {{ data.name }}
    //-             td 
    //-                 a.button.is-danger(
    //-                     href="#",
    //-                     @click.prevent="deleteValue(data)"
    //-                 )
    //-                     i.fa.fa-times
</template>

<script>
import LoadEmployeeHelper from "@REQUEST/employee/load-employee-helper.js";
import RouteHelper from "@HELPERS/route-helper";

export default {
    name: "LoadEmployeetData",

    props: {
        value: {
            type: Array,
            default: () => [],
        },
    },

    created() {
        this.loadData();
    },

    methods: {
        /**
         * Load Results
         */
        async loadData() {
            const url = RouteHelper.routePath("api.employee.data");
            try {
                const data = await LoadEmployeeHelper.loadEmployees(url);
                this.$emit("input", data);
            } catch (err) {
                console.log(err);
            }
        },
        /**
         * delete item
         */
        deleteValue(data) {
            const confirmed = confirm(
                "Are you sure delete this employee with code : " +
                    data.name +
                    " ?"
            );
            if (confirmed) {
                const index = this.value.findIndex((x) => x.name == data.name);
                if (index > -1) {
                    const url = RouteHelper.routePath("api.employee.delete", {
                        id: this.value[index]._id,
                    });

                    try {
                        LoadEmployeeHelper.deleteEmployee(url);
                        Vue.delete(this.value, index);
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        },
        onChangeEmployee(payload) {
            const employee = payload.target.value;
            this.$emit("resultTaskFromEmployee", employee);
        },
    },
};
</script>

<style scoped></style>
