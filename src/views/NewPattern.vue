<template>
<h2>Add a new pattern</h2>

<form @submit.prevent="onSubmit">
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input v-model="username" type="text" class="form-control" id="username">
  </div>
  <div class="mb-3">
    <label for="pattern_name" class="form-label">Pattern name</label>
    <input v-model="pattern_name" type="text" class="form-control" id="pattern_name">
  </div>
  <div class="mb-3">
    <label for="pattern_body" class="form-label">Pattern Body</label>
    <input v-model="pattern_body" type="text" class="form-control" id="pattern_body">
    <div class="form-text">This needs to be in a specific format. Please visit the patterns page to take a look.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</template>

<script>
export default {
    name: 'NewPattern',
    data() {
        return {
            newPattern: [],
            username: '',
            pattern_name: '',
            pattern_body: ''
        }
    },
    methods: {
        async postNewPattern() {
            const response = await fetch('https://automatrixapi.pythonanywhere.com/api/patterns', {
                method: 'POST',
                body: {username, pattern_name, pattern_body}
            });
            const {pattern} = await response.json();
            return pattern;
        }
    },
    onSubmit(e) {
        console.log('hi')
        if (!username || !pattern_name || !patern_body) {
            console.log('saydgsafdugyisa')
        }
    }
}
</script>

<style scoped>

form {
    margin: 30px auto;
    width: 70%;
    background-color: whitesmoke;
    padding: 20px;
    color: black;
    text-align: left;
    border-radius: 15px;
}

label {
    margin: 0
}

</style>