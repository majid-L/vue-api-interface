<template>
    <h2 @click="onClick()">Welcome!</h2>
    <p>This application provides a simple front end interface for one of my back end API projects.</p>
    <div v-for="endpoint in endpoints">
        <div>hello</div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            endpoints: []
        }
    },
    methods: {
        onClick() {
            console.log(123)
        },
        async fetchEndpoints() {
            const response = await fetch('https://automatrixapi.pythonanywhere.com');
            const {endpoints} = await response.json();
            return endpoints;
        },
        async created() {
            this.endpoints = endpoints;
        }
    }
}

</script>

<style scoped>
p {
    font-size: 20px
}
</style>