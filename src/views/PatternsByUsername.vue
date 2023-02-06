<template>
<h2>Patterns by {{ username }}</h2>

<div v-if="loading">
<div class="spinner-border text-info" role="status">
</div>
<p class="loading">Loading...</p>
</div>

<section>
<div v-if="!error" class="grid">
<div :key="pattern._id" v-for="pattern in patterns">
<Pattern :pattern="pattern" />
</div>
</div>
</section>

<div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
</div>

<button @click="() => $router.go(-1)" type="button" class="btn btn-warning">Go back</button>

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
            error: false,
            loading: true
        }
    },
    methods: {
        async fetchPatternsByUsername() {
            this.loading = true;
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this.username}/patterns`);
            if (response.ok) {
              const {patterns} = await response.json();
              this.loading = false;
              return patterns;
            } else {
              const {msg} = await response.json();
              this.loading = false;
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