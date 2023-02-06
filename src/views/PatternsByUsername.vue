<template>
<h2>Patterns by {{ username }}</h2>
<div v-if="!error" class="flexbox">
<div :key="pattern._id" v-for="pattern in patterns">
<Pattern :pattern="pattern" />
</div>
</div>
<div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
</div>
</template>

<script>
import Pattern from '../components/Pattern.vue';

export default {
    name: 'PatternsByUsername',
    props: {
        username: String
    },
    data() {
        return {
            patterns: [],
            error: false
        }
    },
    methods: {
        async fetchPatternsByUsername() {
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this.username}/patterns`);
            if (response.ok) {
              const {patterns} = await response.json();
              return patterns;
            } else {
              const {msg} = await response.json();
              this.error = msg;
            }
           
        }
    },
    async created() {
        this.patterns = await this.fetchPatternsByUsername();
        this.$watch(() => this.$route.params, async (toParams, previousParams) => {
            this.error = false;
            this.patterns = await this.fetchPatternsByUsername();
        })
    }
}
</script>


<!-- 
<script>
import Pattern from '../components/Pattern.vue';

export default {
    name: 'PatternsByUsername',
    props: {
        username: String
    },
    data() {
        return {
            patterns: [],
            error: false
        }
    },
    methods: {
        async fetchPatternsByUsername() {
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this.username}/patterns`);
            const {patterns} = await response.json();
            return patterns;
        }
    },
    created() {
        this.$watch(() => this.$route.params, async (toParams, previousParams) => {
            try {
            this.patterns = await this.fetchPatternsByUsername();
            } catch(err) {
                console.log('hello')
            }
        })
    }
}
</script> -->