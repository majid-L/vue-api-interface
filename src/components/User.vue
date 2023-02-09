<template>
    <div class="card">
        <div class="card-body" data-toggle="tooltip" title="Click to see all paterns by this user">    
        
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <router-link :to="{path: `/users/${user.username}/patterns` }"><button type="button" class="btn btn-info">Patterns</button></router-link>
        <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Options
       </button>
       <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <li><router-link class="dropdown-item" :to="{path: `/users/${user._id}`}">Update details</router-link></li>
        <li><a class="dropdown-item btn-danger" @click="deleteUser"><span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{{ !loading ? 'Delete' : 'Deleting...'}}</a></li>
      </ul>
      </div>
      </div>

      <h5 class="card-title">{{ user.account_owner}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
      <p class="card-text"><span>User id:</span> {{ user._id }}</p>
      <p class="card-text --hide-overflow"><span>Email:</span> {{ user.email }}</p>
      <p class="card-text --hide-overflow"><span>Avatar url:</span> {{ user.avatar_url }}</p>
          
      <p class="error-msg" v-if="error">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
        user: Object
    },
    data() {
        return {
            loading: false,
            error: false
        }
    },
    methods: {
        async deleteUser() {
            this.error = false;
            this.loading = true;
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/users/${this.user._id}`, { method: 'DELETE'});
            this.loading = false;
            if (response.ok) {
                this.$router.push({path: '/deleted', query: {type: 'user'}})
            } else {
                const {msg} = await response.json();
                this.error = msg;
                console.log(msg)
            }
        },
    }
}
</script>

<style scoped>
* {
    color: black
}

.card-body {
    height: 260px
}

button {
    height: 40px;
    border: 1px solid grey;
    box-shadow: 0 0 5px 1px grey
}


.btn-danger {
    float: left
}

.btn-group {
margin-bottom: 8px
}

#btnGroupDrop1 {
    background-color: #FFC107;
}

.btn-info {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.spinner-border {
  width: 15px !important;
  height: 15px !important;
  font-size: 10px;
  margin: 0 5px 0 0;
}

a {
  text-decoration: none;
}

.error-msg {
    color: red;
    margin: 10px auto 0
}

</style>