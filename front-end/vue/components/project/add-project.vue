<template lang="pug">
#multi-text-project-template
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
                  label.label نام پروژه
                  .control
                      input.input(
                          type="text",
                          placeholder="نام پروژه",
                          v-model="value.name"
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
import LoadProjectHelper from "@REQUEST/project/load-project-helper.js";
import RouteHelper from "@HELPERS/route-helper";
const VuePersianDatetimePicker = require("vue-persian-datetime-picker").default;

export default {
    name: "AddProject",
    components: {
        DatePicker: VuePersianDatetimePicker,
    },
    props: {
        value: {
            type: Object,
            default: () => {},
        },
    },

    created() {},

    methods: {
        saveValue() {
            const url = RouteHelper.routePath("project.store");

            try {
                const data = LoadProjectHelper.insertProject(url, this.value);
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
