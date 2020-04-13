<template>
  <div id="home">
    <section>
      <iframe
        class="frameBorders"
        width="420"
        height="315"
        :src="'https://www.youtube.com/embed/' + videoId"
        allowfullscreen="true"
      ></iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      videoId: "dxRB4sdbIcw"
    };
  }
};
</script>

<style>
#home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin: 10% 0;
  min-height: 200px;
  align-items: center;
}

.frameBorders {
  border: none;
}
</style>