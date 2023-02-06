<template>
<h2>Patterns</h2>
<div class="flexbox">
<div :key="pattern._id" v-for="pattern in patterns">
<Pattern :pattern="pattern" />
</div>
</div>
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
            patterns: []
        }
    },
    methods: {
      async fetchPatterns() {
        const response = await fetch('https://automatrixapi.pythonanywhere.com/api/patterns');
        const {patterns} = await response.json();
          return patterns;
      } 
    },
    async created() {
    this.patterns = await this.fetchPatterns();
  }
}
</script>