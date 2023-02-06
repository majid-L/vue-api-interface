<template>
  <NavigationBar />
  <Header title="API interface" />
  <router-view></router-view>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import Home from './views/Home.vue';
import Header from './components/Header.vue';
import Patterns from './views/Patterns.vue';
import Users from './views/Users.vue';

export default {
  name: 'App',
  components: {
    Header,
    NavigationBar
  },
  compatConfig: { MODE: 3 }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

body {
  background-color: rgb(35, 33, 33) !important;
}

h2 {
  margin: 0 auto 30px !important;
  font-size: 40px !important;
}

li {
  list-style: none;
}

.card {
    text-align: left;
}

.card-title {
    color: rgb(25, 30, 44);
    font-weight: 900;
    font-size: 24px;
}

.card-subtitle {
    font-size: 20px
}

.card-text {
    margin: 2px 0
}

.card-body {
  height: 200px;
}

.--hide-overflow {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

span {
    font-weight: bold;
}

.grid {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
  justify-content: center;
  gap: 15px;
  margin: 0 auto;
  max-width: 1600px;
}

.alert {
  width: fit-content;
  max-width: 700px;
  margin: 30px auto;
}

.spinner-border {
  width: 90px !important;
  height: 90px !important;
  font-size: 30px;
  margin: 30px auto 10px;
}

.loading {
  margin-bottom: 50px;
}

section {
    margin-bottom: 90px
}

</style>