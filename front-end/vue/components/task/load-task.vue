<template lang="pug">
div
    table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth
        thead
            tr
                th ID
                th نام وظیفه
                th توضیحات
                th پروژه مادر
                th زمان شروع
                th پایان
                th اتمام واقعی
                th نام مجری
                th هزینه
                th حذف
        tbody
            tr(v-for="data in value" :Key="data.ID")
                td {{ data.ID }}
                td {{ data.name }}
                td {{ data.description }}
                td {{ data.project_id }}
                td {{ data.start }}
                td {{ data.appointedTime }}
                td {{ data.finishTime }}
                td {{ data.employee_id }}
                td {{ data.cast }}
                td 
                    a.button.is-danger(
                        href="#",
                        @click.prevent="deleteValue(data)"
                    )
                        i.fa.fa-times
</template>

<script>
import LoadTasktHelper from "@REQUEST/task/load-task-helper.js";

export default {
    name: "LoadTasktData",

    props: {
        value: {
            type: Array,
            default: () => [],
        },
        projectId: {
            type: String,
            default: null,
        },
    },

    created() {
        this.loadData();
    },

    methods: {
        /**
         * Load Results
         */
        async loadData(employee) {
            try {
                const data = await LoadTasktHelper.loadTasks(
                    this.projectId,
                    employee
                );
                console.log(data)
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
                "Are you sure delete this task with code : " + data.ID + " ?"
            );
            if (confirmed) {
                const index = this.value.findIndex((x) => x.ID == data.ID);
                if (index > -1) {
                    Vue.delete(this.value, index);
                }
            }
        },
    },
};
</script>

<style scoped></style>
