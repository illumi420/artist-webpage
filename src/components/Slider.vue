<template>
  <div id="slider">
    <modal name="currentImg">
      <img :src="currentImg" />
    </modal>
    <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" @click="show()" />
    </div>
    <a class="prev" @click="prev()" href="#">&#10094; Previous</a>
    <a class="next" @click="next()" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      imgs: [
        "https://media.mutualart.com/Images/2015_08/21/00/002107579/f4d9dd19-62b8-498c-b025-7774c1e3034d_570.Jpeg",
        "http://3.bp.blogspot.com/_yfRYdTRW2AQ/TLI3SqnBb5I/AAAAAAAABl4/GRNP5fOcSmc/s1600/1986+86_03.jpg",
        "http://media.krakow.travel/photos/23366/xxl.jpg",
        "https://beksstore.com/wp-content/uploads/2016/11/105.jpg",
        "https://www.vagallery.com/uploads/2/5/9/7/2597378/6764456_orig.jpg",
        "https://pbs.twimg.com/media/DDQ8x4DXYAEgLnI.jpg:large",
        "https://iv1.lisimg.com/image/7798752/600full.jpg",
        "https://i.pinimg.com/564x/00/b2/7e/00b27ed59c34e6097a5d74fc78ca0bc9.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/AA78_by_Zdzislaw_Beksinski_1978.jpg/800px-AA78_by_Zdzislaw_Beksinski_1978.jpg"
      ],
      timer: null,
      currentIndex: 0,
      selectedImgUrl: ""
    };
  },
  mounted: function() {
    // this.startSlide();
  },
  methods: {
    show: function() {
      this.$modal.show("currentImg");
    },
    hide: function() {
      this.$modal.hide("currentImg");
    },
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.imgs[Math.abs(this.currentIndex) % this.imgs.length];
    }
  }
};
</script>

<style lang="scss" scoped>
#slider {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 10% 0;
  align-items: center;
}
img {
  position: relative;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;

  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.close:hover,
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>