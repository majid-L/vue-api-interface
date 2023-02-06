<template>
<h2>Add a new pattern</h2>
<button @click="() => $router.go(-1)" type="button" class="btn btn-warning">Go back</button>

<form @submit.prevent="onSubmit">
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username">
  </div>
  <div class="mb-3">
    <label for="pattern_name" class="form-label">Pattern name</label>
    <input v-model="pattern_name" type="text" class="form-control" id="pattern_name" placeholder="Enter pattern name">
  </div>
  <div class="mb-3">
    <label for="pattern_body" class="form-label">Pattern Body</label>
    <textarea v-model="pattern_body" type="text" class="form-control" id="pattern_body" placeholder="e.g. 1011111111 0000010011 1111100000 1110100000 1011110111 1010001111 1111111111 0011100000 1111111100 0001010000"/>
    <div class="form-text">This needs to be in a specific format. Visit the patterns page to take a look.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
</div>

<div v-if="success" class="alert alert-success" role="alert">
  <p>Your new pattern has been successfully added.</p>
  <Pattern :pattern="newPattern"/>
</div>

</template>

<script>
import Pattern from '../components/Pattern.vue';

export default {
    name: 'NewPattern',
    data() {
        return {
            newPattern: [],
            username: '',
            pattern_name: '',
            pattern_body: '',
            error: false,
            success: false,
            loading: false
        }
    },
    methods: {
        async onSubmit() {
            this.success = false;
            if (!this.username || !this.pattern_name || !this.pattern_body) {
                this.error = "Please ensure that you complete all fields.";
            } else if (!/^(\d+\s)+\d+$/.test(this.pattern_body)) {
                this.error = "Incorrect pattern body format. Please try again.";
            } else {
                this.newPattern = await this.postNewPattern();
            }
        },
        
        async postNewPattern() {
            this.success = false;
            this.error = false;
            const response = await fetch('https://automatrixapi.pythonanywhere.com/api/patterns', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.username, 
                    pattern_name: this.pattern_name, 
                    pattern_body: this.pattern_body})
            });
            if (response.ok) {
              const {pattern} = await response.json();
              this.success = true;
              return pattern;
            } else {
              const {msg} = await response.json();
              this.loading = false;
              this.error = msg;
            }
        }
    }
}
</script>

<style scoped>

form {
    margin: 30px auto;
    width: 80%;
    max-width: 900px;
    background-color: whitesmoke;
    padding: 20px;
    color: black;
    text-align: left;
    border-radius: 15px;
}

label {
    margin: 0
}

/*
use this tyle if changing from textarea to input for pattern body
input:placeholder-shown {
  text-overflow: ellipsis;
}*/

</style>