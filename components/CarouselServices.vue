<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false" instance-name="swiper-services">
    <div class="swiper-wrapper">
      <div class="swiper-slide cursor-pointer" :key="item.id" v-for="item in services">
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
    <div class="swiper-pagination" id="swiper-pagination-services"></div>
  </div>
</template>

<script>
  import services from "~/static/data/services.json";

  export default {
    name: "CarouselServices",
    data() {
      return {
        services: [],
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 50,

          // Responsive breakpoints
          breakpoints: {
            // when window width is <= 499px
            499: {
              slidesPerView: 1,
              spaceBetween: 50,

            },
            // when window width is <= 999px
            999: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
          },
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: "#swiper-pagination-services",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        }
      }
    },
    fetch() {
      this.services = services.services;
    },

  }
</script>

<style lang="scss" scoped>


  .icon-container {
    padding-bottom: 20px;

    .icon {
      filter: brightness(0) invert(1);
    }
  }


</style>
