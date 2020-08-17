<template lang="pug">
form.form.is-small
    .field
        label Project name
        .control
            input.input(v-model="value.name")
    .field
        label Executor
        .control
            input.input(v-model="value.executor")
    .field
        .control
            button.button.is-info(@click.prevent="doCmd('register')") OK
            button.button.is-danger(@click.prevent="doCmd('cancel')") Cancel
</template>

<script>
export default {
    name: "NewProject",

    props: {
        value: {
            type: Object,
            default: () => {},
        },
    },

    methods: {
        /**
         * Regsiter
         */
        doCmd(cmd) {
            this.$emit(`on-${cmd}`, {
                sender: this,
                data: this.value,
            });
        },
    },
};
</script>
