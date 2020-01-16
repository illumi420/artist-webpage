<template>
  <div id="slider">
    <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
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
        "https://scontent-yyz1-1.cdninstagram.com/vp/adfbf51b9b4685972be2c8c7d77a1776/5E5B1CEB/t51.2885-15/e35/46254810_251983225471942_8051349266854281050_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=110",
        "https://iv1.lisimg.com/image/7798752/600full.jpg",
        "https://i.pinimg.com/564x/00/b2/7e/00b27ed59c34e6097a5d74fc78ca0bc9.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/AA78_by_Zdzislaw_Beksinski_1978.jpg/800px-AA78_by_Zdzislaw_Beksinski_1978.jpg"
      ],
    
  timer: null,
  currentIndex: 0
 };
},

mounted: function() {
  this.startSlide();
},

methods: {
  startSlide: function() {
    this.timer = setInterval(this.next, 4000);
  },
  next: function(){
    this.currentIndex +=1;
  },
  prev: function(){
    this.currentIndex -=1;
  }
},
computed: {
  currentImg: function(){
    return this.imgs[Math.abs(this.currentIndex)]
   }
 }
};
</script>

<style lang="css" scoped>
/*gallery*/

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  
  width:50%
}

.prev, .next {
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

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

</style>