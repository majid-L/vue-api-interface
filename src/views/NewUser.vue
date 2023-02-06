<template>
<h2 v-if="_id">Update user details</h2>
<h2 v-else>Add new user</h2>

<form @submit.prevent="onSubmit">
  <p class="form-instruction" v-if="_id">Update one or more of this user's details. <span v-if="_id">(User id: {{ _id }})</span></p>
  <p class="form-instruction" v-else>To add a new user, make sure you fill in <span>all</span> of the fields below.</p>

  <div class="mb-3">
    <label for="account_owner" class="form-label">Account owner</label>
    <input v-model="account_owner" type="text" class="form-control" id="account_owner" placeholder="Enter full name">
  </div>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username">
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
  </div>
  <div class="mb-3">
    <label for="avatar_url" class="form-label">Avatar url</label>
    <input v-model="avatar_url" type="text" class="form-control" id="avatar_url" placeholder="Enter avatar url">
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
    props: {
      _id: String
    },
    data() {
        return {
            httpMethod: 'POST',
            user: [],
            username: '',
            account_owner: '',
            email: '',
            avatar_url: '',
            error: false,
            success: false,
            loading: false
        }
    },
    methods: {
        async onSubmit(e) {
          this.success = false;
          const incompleteForm = !this.username || !this.account_owner || !this.email || !this.avatar_url;
          const emptyForm = !this.username && !this.account_owner && !this.email && !this.avatar_url

          if (this.httpMethod === 'POST' && incompleteForm) {
            this.error = "Please ensure that you complete all fields.";
          } else if (this.httpMethod === 'PUT' && emptyForm) {
            this.error = "Please ensure that you fill in at least 1 field.";
          //} else if (this.email && !/^.+@.+\..+$/.test(this.email)) {
          //  this.error = "Invalid email format. Please try again.";
          } else if (this.httpMethod === 'POST') {
            this.user = await this.postUser();
          } else if (this.httpMethod === 'PUT') {
            this.user = await this.updateUser();
          }
        },
        
        async postNewUser() {
            this.success = false;
            this.error = false;
            const response = await fetch('https://automatrixapi.pythonanywhere.com/api/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.username, 
                    account_owner: this.account_owner, 
                    email: this.email,
                    avatar_url: this.avatar_url    
                  })
            });
            if (response.ok) {
              const {user} = await response.json();
              this.success = true;
              return pattern;
            } else {
              const {msg} = await response.json();
              this.loading = false;
              this.error = msg;
            }
        },

        async updateUser() {
          this.success = false;
          this.error = false;
          const response = await fetch('https://automatrixapi.pythonanywhere.com/api/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: this.username, 
                    account_owner: this.account_owner, 
                    email: this.email,
                    avatar_url: this.avatar_url    
                  })
            });
            if (response.ok) {
              const {user} = await response.json();
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

p {
  margin: 0
}

.form-instruction {
  margin-bottom: 20px
}

.btn-group {
  margin-bottom: 20px
}

/*
use this tyle if changing from textarea to input for pattern body
input:placeholder-shown {
  text-overflow: ellipsis;
}*/

</style>