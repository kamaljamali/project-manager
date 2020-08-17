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
    name: "AddProject",

    props: {
        value: {
            type: Object,
            default: () => {},
        },
    },

    created() {},

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
