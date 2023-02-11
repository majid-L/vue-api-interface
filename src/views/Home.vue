<template>
    <div class="glass">
    <h2>Welcome!</h2>
    <p id="home-intro">This application provides an interactive front end interface for one of my back end API projects. To see the Github repository for that project, click on the "Automatrix API" link on the far left of the navigation bar.</p>
    </div>


<div v-if="loading">
<div class="spinner-border text-info" role="status">
</div>
<p class="loading">Loading...</p>
</div>

<section v-if="!loading">
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

<button v-if="!loading" @click.native="scrollToTop" class="btn btn-warning back-to-top">Back to top</button>

</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            endpoints: [],
            loading: false
        }
    },
    methods: {
        async fetchEndpoints() {
            this.loading = true;
            const response = await fetch('https://automatrixapi.pythonanywhere.com');
            const {endpoints} = await response.json();
            this.loading = false;
            return endpoints;
        },
        scrollToTop() {
      window.scrollTo(0,0);
    }
    },
    async created() {
        this.endpoints = await this.fetchEndpoints();
    }
}

</script>

<style scoped>
* {
    color: black
}

.loading {
    color: whitesmoke
}

h2 {
    font-family: 'Luckiest Guy', cursive;
    font-weight: normal;
}

p {
    font-size: 20px;
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

#home-intro {
    text-align: left;
    margin: 10px 25px
}

h5 {
    font-weight:600;
}
</style>