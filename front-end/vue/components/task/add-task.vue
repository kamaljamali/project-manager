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
                      input.input(
                          type="text",
                          placeholder="شروع",
                          v-model="value.start"
                      )
          .column.is-5
              .field
                  label.label زمان مقرر شده
                  .control
                      input.input(
                          type="text",
                          placeholder="زمان مقرر شده",
                          v-model="value.appointedTime"
                      )
          .column.is-5
              .field
                  label.label زمان اتمام
                  .control
                      input.input(
                          type="text",
                          placeholder="زمان اتمام",
                          v-model="value.finishTime"
                      )
          .column.is-5
              .field
                  label.label نام مجری
                  .control
                      input.input(
                          type="text",
                          placeholder="نام مجری",
                          v-model="value.user_id"
                      )
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

module.exports = {
    name: "AddTask",

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
        Vue.set(this.value, "project_id", this.projectId);
    },

    methods: {
        saveValue() {
            this.$emit("on-register", {
                sender: this,
                data: this.value,
            });
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
