<template>
    <div class="card">
        <div class="card-body">
        <div class="button-group">
          <form @submit.prevent="onSubmit" class="d-flex">
          <input class="form-control me-2" type="text" v-model="newPatternName" placeholder="New pattern name" aria-label="Update">
          <button :disabled="!newPatternName" class="btn btn-outline-success" type="submit">Update</button>
        </form>
        <button @click="deletePattern" class="btn btn-danger" type="button">
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ !loading ? 'Delete' : 'Deleting...'}}
        </button>
        </div>
          <h5 class="card-title">"{{ pattern.pattern_name }}"</h5>
          <h6 class="card-subtitle mb-2 text-muted">by {{ pattern.username }}</h6>
          <p class="card-text"><span>Pattern id:</span> {{ pattern._id }}</p>
          <p class="card-text --hide-overflow"><span>Pattern body:</span> {{ pattern.pattern_body }}</p>
          <p class="card-text"><span>Created at:</span> {{ pattern.created_at }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pattern',
    props: {
        pattern: Object
    },
    data() {
        return {
            newPatternName: '',
            loading: false
        }
    },
    methods: {
        async deletePattern() {
            this.loading = true;
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/patterns/${this.pattern._id}`, { method: 'DELETE'});
            this.loading = false;
            if (response.ok) {
                this.$router.push({path: '/deleted', query: {type: 'pattern'}})
            } else {
                return
            }
        },
        onSubmit() {
            
        }
    }
}
</script>

<style scoped>
* {
    color: black
}

input:placeholder-shown {
  text-overflow: ellipsis;
}

.spinner-border {
  width: 15px !important;
  height: 15px !important;
  font-size: 10px;
  margin: 0 5px 0 0;
}

</style>