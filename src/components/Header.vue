<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Hello'
        }
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Luckiest Guy', cursive;
    font-size: 80px;
    margin: 80px auto 0
}

header {
    margin-bottom: 30px
}
</style>