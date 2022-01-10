<template>
  <section class="banner-header banner-img valign bg-img bg-fixed" data-overlay-darkgray="5" :data-background="require('assets/images/'+this.image+'.jpg')" :style="{'background-image': 'url(' + background + ')'}">
    <!-- Left Panel -->
    <div class="left-panel"></div>
    <div class="hero-corner" ></div>
  </section>
</template>

<script>
export default {
  name: "HeaderPages",
  props:['image'],
  data() {
    return {
      background: '',
    }
  },
  mounted() {
    this.background = require('assets/images/'+this.image+'.jpg');
  }
}
</script>

<style scoped>

  .banner-header {
    background-size: cover;
    background-position: center;
  }

</style>
