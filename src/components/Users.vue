<template>
<h1>Users</h1>
<div class="flexbox">
<div :key="user._id" v-for="user in users">
<User :user="user" />
</div>
</div>
</template>

<script>
import User from './User.vue';

export default {
    name: 'Users',
    components: {
        User
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
      async fetchUsers() {
        const response = await fetch('https://automatrixapi.pythonanywhere.com/api/users');
        const {users} = await response.json();
          return users;
      } 
    },
    async created() {
    this.users = await this.fetchUsers();
  }
}
</script>