<template>
  <div class="left-panel-short">

    <ul class="social-left clearfix">
      <li><a href="#"><i class="flaticon-earth-globe"></i></a></li>
      <li>
        <nuxt-link :to="switchLocalePath('it')" exact>IT</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="switchLocalePath('en')" exact>EN</nuxt-link>
      </li>
      <li>&nbsp</li>
      <li><a href="https://www.instagram.com/marinacoppola_amalfi/" target="_blank"><i class="flaticon-instagram-logo"></i></a></li>
      <li><a href="https://www.facebook.com/portoamalfi/" target="_blank"><i class="flaticon-facebook"></i></a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "LeftPanelShort.vue"
    }
</script>

<style scoped>

</style>
