<template lang="pug">
#multi-text-employee-template
      .columns.is-multiline
          .column.is-5
              .field
          .column.is-5
              .field
                  label.label نام
                  .control
                      input.input(
                          type="text",
                          placeholder="نام",
                          v-model="value.name"
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
    name: "AddEmployee",

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
