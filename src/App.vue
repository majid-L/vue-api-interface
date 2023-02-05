<template>
<Header title="API interface"/>
<Patterns :patterns="patterns"/>
</template>

<script>
import Header from './components/Header.vue';
import Patterns from './components/Patterns.vue'

export default {
  name: 'App',
  components: {
    Header,
    Patterns
  },
  compatConfig: { MODE: 3 },
  data() {
    return {
      patterns: [],
      users: []
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

body {
  background-color: rgb(35, 33, 33) !important;
}

li {
  list-style: none;
}

.card {
    text-align: left;
}

.card-title {
    color: rgb(25, 30, 44);
    font-weight: 900;
    font-size: 24px;
}

.card-subtitle {
    font-size: 20px
}

.card-text {
    margin: 2px 0
}

.pattern-body {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

span {
    font-weight: bold;
}
</style>
