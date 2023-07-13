<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Header/>
  <RouterView/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header
  }
}
</script>

<style>
body, html {
  display: block;
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */
}
</style>
