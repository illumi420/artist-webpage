<template>
 <div id="app">
    <Menu />
   <router-view></router-view>
    <Slider />
    <About />
    <Contact />
   <section>
    <youtube :video-id="dxRB4sdbIcw" @ready="ready" @playing="playing" player-width="640" player-height="480" :player-vars="{autoplay: 1}"></youtube>
</section>
 </div>
   </template>

<script>
import Menu from "./components/Menu.vue";


export default {
  name: "app",
  components: { Menu },
  methods: {
    method (url) {
      this.videoId = this.$youtube.getIdFromURL(url)
      this.startTime = this.$youtube.getTimeFromURL(url)
    }
  }
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
    background: url(https://beks.pl/wp-content/uploads/2016/11/S-5566low.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
}
</style>
