<template>
    <button class="btn btn-primary" @click="onClick()">Patterns</button>
</template>

<script>
export default {
    name: 'Buttons',
    methods: {
        onClick() {
            fetch('https://automatrixapi.pythonanywhere.com/api/users')
            .then(res => res.json())
            .then(({users}) => console.log(users))
        }
    }
}
</script>

<style scope>
button {
    font-size: 20px;
}
</style>