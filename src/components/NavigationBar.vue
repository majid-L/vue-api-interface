<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://github.com/3782291211/django-api-project">Automatrix API</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/patterns">Patterns</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/patterns/new">Add new pattern</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/users/new">Add new user</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Patterns by user
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li :key="user._id" v-for="user in users">
                <router-link class="dropdown-item" aria-current="page" :to="{path: `/users/${user.username}/patterns` }">{{ user.username }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'NavigationBar',
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

<style scoped>

* {
  margin: 0
}

</style>