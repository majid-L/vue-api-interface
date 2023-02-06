<template>
<h2>Users</h2>

<div v-if="loading">
<div class="spinner-border text-info" role="status">
</div>
<p class="loading">Loading...</p>
</div>

<div class="grid">
<div :key="user._id" v-for="user in users">
<User :user="user" />
</div>
</div>
</template>

<script>
import User from '../components/User.vue';

export default {
    name: 'Users',
    components: {
        User
    },
    data() {
        return {
            users: [],
            loading: true
        }
    },
    methods: {
      async fetchUsers() {
        this.loading = true;
        const response = await fetch('https://automatrixapi.pythonanywhere.com/api/users');
        const {users} = await response.json();
        this.loading = false;
        return users;
      } 
    },
    async created() {
    this.users = await this.fetchUsers();
  }
}
</script>