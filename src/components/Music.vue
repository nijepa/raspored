<template>
  <div class="product-feed">
          <div ref="el" v-for="(Product,i) in ProductFeed" :key="i" class="product-item" >
            <div ref="mu" class="product-feed"></div>
            <div ref="mu" class="product-feed"></div>
            <div ref="mu" class="product-feed">tzt</div>
            {{Product}}
          </div>
    </div>
</template>


<script>
import { nextTick, onMounted, ref } from '@vue/runtime-core';
export default {
  data() {
    return {
      ProductFeed: [1,2,3,4]
    }
  },
  setup(){
    const el = ref(null)
    const mu = ref(null)
    async function loadFeed(){
      await nextTick();
      let element1 = mu.value.querySelector('.product-item'); 
      console.log(el.value)
      console.log(`element1`, element1) // this works and displays the element

      let element2 = el.value.querySelector('.product-item'); 
      console.log(`element2`, element2) // this comes back as null
      }
    

   onMounted(() => {
     //console.log(mu.value)
      loadFeed()
    })

   return {el, mu}
  }
}
</script>
<style lang="scss">
.h1 {
  position: absolute;
  top: 2em;
}
</style>
