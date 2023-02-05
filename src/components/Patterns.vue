<template>
<div class="patterns_flexbox">
<div :key="pattern._id" v-for="pattern in patterns">
<Pattern :pattern="pattern" />
</div>
</div>
</template>

<script>
import Pattern from './Pattern.vue';

export default {
    name: 'Patterns',
    props: {
        patterns: Array
    },
    components: {
        Pattern
    }
}
</script>

<style scoped>
.patterns_flexbox {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
  justify-content: center;
  gap: 15px;
  margin: 0 auto
}
</style>