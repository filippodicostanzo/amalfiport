<template>

<div class="modal-content">
  <h2 class="text-center">{{item.name.it}}</h2>
  <img :src="require('~/assets/images/'+item.id+'-01.jpg')">
  <div v-html="item.description.it" class="pt-3" v-if="$nuxt.$i18n.locale==='it'"></div>
  <div v-html="item.description.en" class="pt-3" v-if="$nuxt.$i18n.locale==='en'"></div>

</div>
</template>

<script>
export default {
  name: "Modal",
  props:['item']
}
</script>

<style lang="scss">

.modal-content {
  padding: 30px;

  img {
    height: 200px;
    object-fit: cover;
    object-position: center center;
  }
  p{
    text-align: justify;
  }
}

</style>
