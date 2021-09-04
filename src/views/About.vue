<template>
  <div id="mz-background">
    <p>dsgsgdd</p>
  </div>
</template>
<script>
export default {
  name: "UnderworldPattern",
  data() {
    return {
      currentTime: 0,
    };
  },
  /* computed: {
  currentTime() {
    return Date.now();
  },
}, */
  mounted: function() {
    window.setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  },
  unmounted() {
    window.clearInterval();
  },

  watch: {
    async currentTime(newValue, oldValue) {
      // Log user out when current time exceeds the token expiry time
      // Getting token ExpiryTime
      console.log(newValue + " " + oldValue);
    },
  },
};
</script>
<style lang="scss" scoped></style>
