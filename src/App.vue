<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "app",
  components: { Menu }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #ffffff;
  padding: 10px;
  margin: 60px;
}

/* background */
body {
  padding: 0;
  margin: 0;
}

html {
  background: url(https://beks.pl/wp-content/uploads/2016/11/S-5566low.jpg)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
</style>
