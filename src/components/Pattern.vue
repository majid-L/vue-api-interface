<template>
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">"{{ pattern.pattern_name }}""</h5>
          <h6 class="card-subtitle mb-2 text-muted">by {{ pattern.username }}</h6>
          <p class="card-text"><span>Pattern id:</span> {{ pattern._id }}</p>
          <p class="card-text pattern-body"><span>Pattern body:</span> {{ pattern.pattern_body }}</p>
          <p class="card-text"><span>Created at:</span> {{ pattern.created_at }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pattern',
    props: {
        pattern: Object
    }
}
</script>

<style scoped>
* {
    color: black
}

</style>