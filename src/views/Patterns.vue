<template>
<h2>Patterns</h2>

<div v-if="loading">
<div class="spinner-border text-info" role="status">
</div>
<p class="loading">Loading...</p>
</div>

<router-link to="/patterns/new"><button v-if="!loading" type="button" class="btn btn-warning">Add new pattern</button></router-link>

<section>
<div class="grid">
<div v-for="pattern in patterns" :key="pattern._pattern_name">
<Pattern :pattern="pattern" />
</div>
</div>
</section>

<button v-if="!loading" @click.native="scrollToTop" class="btn btn-warning back-to-top">Back to top</button>
</template>

<script>
import Pattern from '../components/Pattern.vue';

export default {
    name: 'Patterns',
    components: {
        Pattern
    },
    data() {
        return {
            patterns: [],
            loading: true
        }
    },
    methods: {
      async fetchPatterns() {
        this.loading = true;
        const response = await fetch('https://automatrixapi.pythonanywhere.com/api/patterns');
        const {patterns} = await response.json();
        this.loading = false;
        return patterns;
      },
      scrollToTop() {
      window.scrollTo(0,0);
    }
    },
    async created() {
    this.patterns = await this.fetchPatterns();
    }
}
</script>

<style scoped>
button {
  margin: 0 auto 40px;
  font-size: 20px;
}
</style>