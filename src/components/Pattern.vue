<template>
    <div class="card">
        <div class="card-body">
        <div class="button-group">
          <form @submit.prevent="onSubmit" class="d-flex">
          <input class="form-control me-2" type="text" v-model="newPatternName" placeholder="New pattern name" aria-label="Update">
          <button :disabled="!newPatternName" class="btn btn-outline-success" type="submit"><span v-if="loadingUpdate" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{{ !loadingUpdate ? 'Update' : null}}</button>
        </form>
        <button @click="deletePattern" class="btn btn-danger" type="button">
            <span v-if="loadingDelete" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ !loadingDelete ? 'Delete' : 'Deleting...'}}
        </button>
        </div>
          <h5 class="card-title">"{{ pattern.pattern_name }}"</h5>
          <h6 class="card-subtitle mb-2 text-muted">by {{ pattern.username }}</h6>
          <p class="card-text"><span>Pattern id:</span> {{ pattern._id }}</p>
          <p class="card-text --hide-overflow"><span>Pattern body:</span> {{ pattern.pattern_body }}</p>
          <p class="card-text"><span>Created at:</span> {{ pattern.created_at }}</p>

          <p class="error-msg" v-if="error">{{ error }}</p>
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
            loadingDelete: false,
            loadingUpdate: false,
            error: false
        }
    },
    methods: {
        async deletePattern() {
            this.error = false;
            this.loadingDelete = true;
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/patterns/${this.pattern._id}`, { method: 'DELETE'});
            this.loadingDelete = false;
            if (response.ok) {
                this.$router.push({path: '/deleted', query: {type: 'pattern'}})
            } else {
                const {msg} = await response.json();
                this.error = msg;
            }
        },
        async onSubmit() {
            this.error = false;
            this.loadingUpdate = true;
            const response = await fetch(`https://automatrixapi.pythonanywhere.com/api/patterns/${this.pattern._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"pattern_name": this.newPatternName})
            });
            this.loadingUpdate = false;
            if (response.ok) {
                const {updated_pattern} = await response.json();
                this.pattern.pattern_name = updated_pattern.pattern_name;
            } else {
                const {msg} = await response.json();
                this.error = msg;
            }
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

button {
    color: whitesmoke
}

.spinner-border {
  width: 15px !important;
  height: 15px !important;
  font-size: 10px;
  margin: 0 5px 0 0;
}

.error-msg {
    color: red;
    margin: 10px auto 0
}

</style>