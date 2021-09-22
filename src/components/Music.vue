<template>
   <div class="navbar" id="myTopnav">


        <div>
          <h1>ddddddddddddddddd</h1>
          <!--<video-background :src="require('@/assets/mov.mp4')" :sources="[require('@/assets/mov.mp4')]" :poster="require('@/assets/logo.png')">
          </video-background>-->
           <img :src="getImage('http://localhost:8080/images/logo.png')" alt="">
        </div>

      
   </div>
</template>

<script>
//import VideoBackground from 'vue-responsive-video-background-player'
export default {
  components: {
    //VideoBackground
  },
  methods: {
      getImage(imagePath) {
        return require(imagePath);
      }
    }
};
</script>
<style lang="scss">
.h1 {
  position: absolute;
  top: 2em;
}
</style>
