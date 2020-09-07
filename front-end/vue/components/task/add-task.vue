<template lang="pug">
#multi-text-task-template
      .columns.is-multiline
          .column.is-5
              .field
                  label.label ID
                  .control
                      input.input(
                          type="text",
                          placeholder="ID",
                          v-model="value.ID"
                      )
          .column.is-5
              .field
                  label.label نام وظیفه
                  .control
                      input.input(
                          type="text",
                          placeholder="نام وظیفه",
                          v-model="value.name"
                      )
          .column.is-5
              .field
                  label.label توضیحات
                  .control
                      input.input(
                          type="text",
                          placeholder="توضیحات",
                          v-model="value.description"
                      )
          .column.is-5
              .field
                  label.label پروژه مادر
                  .control
                      input.input(
                          type="text",
                          disabled,
                          placeholder="پروژه مادر",
                          v-model="value.project_id",
                      )
          .column.is-5
              .field
                  label.label شروع
                  .control
                      date-picker(
                        v-model="value.start",
                        format="YYYY-MM-DD HH:mm:ss",
                        display-format=" jDD/jMM/jYYYY HH:mm",
                        type="datetime",
                        required
                    )
          .column.is-5
              .field
                  label.label زمان مقرر شده
                  .control
                      date-picker(
                        v-model="value.appointedTime",
                        format="YYYY-MM-DD HH:mm:ss",
                        display-format=" jDD/jMM/jYYYY HH:mm",
                        type="datetime",
                    )

          .column.is-5
              .field
                  label.label زمان اتمام
                  .control
                      date-picker(
                        v-model="value.finishTime",
                        format="YYYY-MM-DD HH:mm:ss",
                        display-format=" jDD/jMM/jYYYY HH:mm",
                        type="datetime",
                    )
          .column.is-5
              .field
                  label.label نام مجری
                  .control
                        .select.is-success
                            select(v-model="value.employee_id")
                                option(v-for='(employee, employeeIndex) in employees',
                                    :value="employee.name") {{ employee.name }}
          .column.is-5
              .field
                  label.label هزینه
                  .control
                      input.input(
                          type="text",
                          placeholder="هزینه",
                          v-model="value.cast"
                      )
          .column.is-5
              a.button.is-primary(href="#", @click.prevent="saveValue()")
                  i.fa.fa-save
          .column.is-5
              a.button.is-danger(
                  href="#",
                  @click.prevent="cancelValue()"
              )
                  i.fa.fa-times
</template>

<script>
"use strict";
import LoadTaskHelper from "@REQUEST/task/load-task-helper.js";
import RouteHelper from "@HELPERS/route-helper";
import LoadEmployeeHelper from "@REQUEST/employee/load-employee-helper.js";
const VuePersianDatetimePicker = require("vue-persian-datetime-picker").default;

export default {
    name: "AddTask",

    data: () => ({
        employees: [],
    }),
    components: {
        DatePicker: VuePersianDatetimePicker,
    },
    props: {
        value: {
            type: Object,
            default: () => {},
        },

        projectId: {
            type: String,
            default: () => {},
        },
    },

    created() {
        this.loadEmployees();
        Vue.set(this.value, "project_id", this.projectId);
    },

    methods: {
        /**
         * load all programs for select programs in form
         */
        loadEmployees() {
            const url = RouteHelper.routePath("api.employee.data");
            LoadEmployeeHelper.loadEmployees(url)
                .then((data) => {
                    Vue.set(this, "employees", data);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        saveValue() {
            const url = RouteHelper.routePath("task.store");
            console.log(this.value);
            try {
                const data = LoadTaskHelper.insertTask(url, this.value);
                this.$emit("on-register", {
                    sender: this,
                    data: this.value,
                });
            } catch (error) {
                console.log(error);
            }
        },
        cancelValue() {
            this.$emit("on-register-cancel", {
                sender: this,
                data: this.value,
            });
        },
    },
};
</script>

<style scoped></style>
