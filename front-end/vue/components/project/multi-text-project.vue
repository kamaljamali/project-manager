<template lang="pug">
#multi-text-project-template.multi-text
    a.button.is-success(href="#", @click.prevent="addValue")
        i.fa.fa-plus
    .form-itemsbox(v-for="(item, index) in item")
        .columns.is-multiline
            .column.is-2
                .field
                    label.label نام پروژه
                    .control
                        input.input(
                            type="text",
                            placeholder="نام پروژه",
                            v-model="item.name",
                            @input="updateValue"
                        )
            .column.is-2
                .field
                    label.label مجری
                    .control
                        input.input(
                            type="text",
                            placeholder="مجری",
                            v-model="item.executor",
                            @input="updateValue"
                        )
            .column.is-2
                .field
                    label.label زمان مقرر شده
                    .control
                        input.input(
                            type="text",
                            placeholder="زمان مقرر شده",
                            v-model="item.appointedTime",
                            @input="updateValue"
                        )
            .column.is-2
                .field
                    label.label زمان اتمام
                    .control
                        input.input(
                            type="text",
                            placeholder="زمان اتمام",
                            v-model="item.finishTime",
                            @input="updateValue"
                        )
            .column.is-2
                a.button.is-primary(href="#", @click.prevent="saveValue()")
                    i.fa.fa-save
            .column.is-2
                a.button.is-danger(
                    href="#",
                    @click.prevent="deleteValue(index)"
                )
                    i.fa.fa-times
</template>

<script>
"use strict";

module.exports = {
    name: "MultiTextProject",

    data: () => ({
        item: [],
    }),

    props: {
        value: {
            type: Array,
            default: () => [],
        },
    },

    created() {
        this.setValue();
    },

    methods: {
        setValue() {
            Vue.set(this, "item", this.value);
        },

        saveValue() {
            Vue.set(this, "item", this.item);
        },

        updateValue: function () {
            this.$emit("input", this.item);
        },

        deleteValue: function (index) {
            this.item.splice(index, 1);
            this.$emit("input", this.item);
        },

        addValue: function () {
            this.item.push({});
            this.$emit("input", this.item);
        },
    },
};
</script>

<style scoped>
</style>
