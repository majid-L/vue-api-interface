<template>
    <button id="patterns" class="btn btn-primary" @click="onClickPatterns()">Patterns</button>
    <button id="users" class="btn btn-primary" @click="onClickUsers()">Users</button>
</template>

<script>
export default {
    name: 'Buttons',
    methods: {
        onClickPatterns() {
            this.$emit('fetch-patterns');
        },
        onClickUsers() {
            this.$emit('fetch-users');
        }
    },
    emits: ['fetch-patterns', 'fetch-users']
}
</script>

<style scope>
button {
    font-size: 20px;
}
</style>