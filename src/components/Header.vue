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
    font-size: 50px;
    margin: 60px auto 40px
}

header {
    margin-bottom: 50px
}
</style>