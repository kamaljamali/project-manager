<template lang="pug">
div
    table.table.is-bordered.is-striped.is-narrow.is-hoverable.is-fullwidth
        thead
            tr
                th ID
                th نام پروژه
                th شروع
                th زمان مقرر شده
                th زمان اتمام
                th دستور
        tbody
            tr(v-for="data in value" :Key="data.ID")
                td {{ data.ID }}
                td {{ data.name }}
                td {{ toPersianDate(data.start) }}
                td {{ toPersianDate(data.appointedTime) }}
                td {{ toPersianDate(data.finishTime) }}
                td.has-text-centered
                    a.button.is-danger(
                        href="#",
                        @click.prevent="deleteValue(data)"
                    )
                        i.fa.fa-times
                    | 
                    a.button.is-success(
                        href="#",
                        @click.prevent="goToTasks(data.ID)"
                    )
                        i.fa.fa-eye
</template>

<script>
import LoadProjectHelper from "@REQUEST/project/load-project-helper.js";
import RouteHelper from "@HELPERS/route-helper";
import LoadTaskHelper from "@REQUEST/task/load-task-helper.js";

export default {
    name: "LoadProjectData",

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
         * To Persian Date
         */
        toPersianDate(date) {
            return DateHelper.toPersianDateLong(date);
        },
        /**
         * Load Results
         */
        async loadData() {
            const url = RouteHelper.routePath("api.project.data");
            try {
                const data = await LoadProjectHelper.loadProjects(url);
                this.$emit("input", data);
            } catch (err) {
                console.log(err);
            }
        },
        /**
         * delete item
         */
        deleteValue(data) {
            const url = RouteHelper.routePath("api.project.task.data", {
                projectId: data.ID,
                employeeId: "*",
            });

            return new Promise((resolve, reject) => {
                LoadTaskHelper.loadTasks(url)
                    .then((res) => {
                        if (res.length <= 0) {
                            const confirmed = confirm(
                                `آیا از حذف این پروژه اطمینان دارید با کد ${data.ID} ?`
                            );
                            if (confirmed) {
                                const index = this.value.findIndex(
                                    (x) => x.ID == data.ID
                                );

                                if (index > -1) {
                                    const url = RouteHelper.routePath(
                                        "api.project.delete",
                                        {
                                            id: this.value[index]._id,
                                        }
                                    );

                                    try {
                                        LoadProjectHelper.deleteProject(url);
                                        Vue.delete(this.value, index);
                                    } catch (err) {
                                        console.log(err);
                                    }
                                }
                            }
                        } else {
                            alert(
                                "پروژه انتخابی دارای وظیفه می باش  لطفا ابتدا وظیفه ها را حذف کنید"
                            );
                        }
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        goToTasks(projectId) {
            const url = RouteHelper.routePath("project.task.index", {
                projectId: projectId,
            });
            window.location.href = url;
        },
    },
};
</script>

<style scoped></style>
