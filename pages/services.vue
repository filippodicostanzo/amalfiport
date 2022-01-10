<template>
  <div>
    <HeaderPages image="header-services"/>
    <LeftPanelShort />
    <section class="services pt-5 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title">Our <span>Services</span></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-30" v-for="item in services">
            <div class="item">
              <div class="icon-container text-center">
                <img :src="require('assets/images/icons/'+item.icon+'.png')" alt="" width="100" class="icon">
              </div>
              <h5 v-if="$nuxt.$i18n.locale==='it'">{{item.name.it}}</h5>
              <h5 v-if="$nuxt.$i18n.locale==='en'">{{item.name.en}}</h5>
              <div class="line"></div>
              <p v-if="$nuxt.$i18n.locale==='it'">{{item.description.it}}</p>
              <p v-if="$nuxt.$i18n.locale==='en'">{{item.description.en}}</p>
              <div class="numb">{{item.id}}</div>

            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import services from "~/static/data/services.json";
  import HeaderPages from "~/components/HeaderPages";
  import LeftPanelShort from "~/components/LeftPanelShort";

  export default {
    name: "about",
    components: {HeaderPages, LeftPanelShort},
    data() {
      return {
        services: []
      }
    },

    fetch() {
      this.services = services.services;
    },
  }
</script>

<style lang="scss" scoped>

  section {
    z-index: 1;
  }

  p {
    text-align: justify;
  }

  .icon-container {
    padding-bottom: 20px;

    .icon {
      filter: brightness(0) invert(1);
    }
  }

</style>
