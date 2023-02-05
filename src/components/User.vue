<template>
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ user.account_owner}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
          <p class="card-text"><span>User id:</span> {{ user._id }}</p>
          <p class="card-text --hide-overflow"><span>Email:</span> {{ user.email }}</p>
          <p class="card-text --hide-overflow"><span>Avatar url:</span> {{ user.avatar_url }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'User',
    props: {
        user: Object
    }
}
</script>

<style scoped>
* {
    color: black
}

</style>