<template>
    <h2>Welcome!</h2>
    <p>This application provides a simple front end interface for one of my back end API projects.</p>

<section>
<div class="list-group" v-for="endpoint in endpoints">
  <div class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ endpoint.name }}</h5>
    </div>
    <p class="mb-1">{{endpoint.description}}</p>
    <small v-if="endpoint.example_request">Example request: {{ endpoint.example_request }}</small>
</div>
</div>
</section>

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
        async fetchEndpoints() {
            const response = await fetch('https://automatrixapi.pythonanywhere.com');
            const {endpoints} = await response.json();
            return endpoints;
        }
    },
    async created() {
        this.endpoints = await this.fetchEndpoints();
    }
}

</script>

<style scoped>
p {
    font-size: 16px
}

.list-group {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
}

.list-group-item {
    margin: 3px;
    text-align: left;
}

h5 {
    font-weight:600;
}
</style>