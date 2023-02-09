<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" id="navbar-title" href="https://github.com/3782291211/django-api-project">Automatrix API</a>
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
          <a v-if="!error" :disabled="loading || error" :class="[loading ? 'grey' : '', 'nav-link dropdown-toggle']" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ loading ? ' Patterns by user (loading)' : 'Patterns by user' }}
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
            users: [],
            loading: true,
            error: false
        }
    },
    methods: {
      async fetchUsers() {
        this.error = false;
        this.loading = true;
        const response = await fetch('https://automatrixapi.pythonanywhere.com/api/users');
        if (response.ok) {
          const {users} = await response.json();
          return users;
        } else if (response.ok === false) {
          const {msg} = await response.json();
          this.error = msg;
        }
      } 
    },
    async mounted() {
    this.users = await this.fetchUsers();
    this.loading = false;
  }
}
</script>

<style scoped>

* {
  margin: 0
}

.spinner-border {
  width: 15px !important;
  height: 15px !important;
  font-size: 10px;
  margin: 0 5px 0 0;
}

.grey {
  color: rgb(148, 147, 147);
  font-style: italic
}

#navbar-title {
  margin-right: 40px
}

</style>

<!-- class="nav-link dropdown-toggle" line 26 -->