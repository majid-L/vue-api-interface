<template>
<h2 v-if="_id">Update user details</h2>
<h2 v-else>Add new user</h2>

<button @click="() => $router.go(-1)" type="button" class="btn btn-warning">Go back</button>

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
  <p class="success-conf">{{_id ? "User details have been successfully updated" : 'New user has been successfully added.'}}</p>
  <User :user="user"/>
</div>

</template>

<script>
import User from '../components/User.vue';

export default {
    name: 'NewUser',
    props: {
      _id: String
    },
    data() {
        return {
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
        async onSubmit() {
          this.success = false;
          const incompleteForm = !this.username || !this.account_owner || !this.email || !this.avatar_url;
          const emptyForm = !this.username && !this.account_owner && !this.email && !this.avatar_url

          if (!this._id && incompleteForm) {
            this.error = "Please ensure that you complete all fields.";
          } else if (this._id && emptyForm) {
            this.error = "Please ensure that you fill in at least 1 field.";
          } else if (!this._id) {
            this.user = await this.postNewUser();
          } else if (this._id) {
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
              return user;
            } else {
              const {msg} = await response.json();
              this.loading = false;
              this.error = msg;
            }
        },

        async updateUser() {
          this.success = false;
          this.error = false;

          const keyValuePairs = [['username', this.username], ['account_owner', this.account_owner], ['email', this.email], ['avatar_url', this.avatar_url]];
          const body = {};
          keyValuePairs.forEach(([k, v]) => v ? body[k] = v : null);

          const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            if (response.ok) {
              const {updated_user} = await response.json();
              this.success = true;
              return updated_user;
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

.success-conf {
  margin-bottom: 17px
}

/*
use this tyle if changing from textarea to input for pattern body
input:placeholder-shown {
  text-overflow: ellipsis;
}*/

</style>