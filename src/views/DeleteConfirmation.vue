<template>
    <h3>Successfully deleted {{ this.$route.query.type }}.</h3>
   <button @click="() => $router.go(-1)" type="button" class="btn btn-warning">Go back</button>
</template>

<script>
export default {
    name: "DeleteConfirmation"
}
</script>

<style scoped>

button {
    margin: 20px
}

</style>