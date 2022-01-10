<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false" instance-name="swiper-instagram">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item.date" v-for="item in items">
        <div class="position-relative">
          <a :href="item.link" target="_blank">
            <img :src="item.image" alt="">
          </a>
        </div>

      </div>

    </div>
    <div class="swiper-pagination" id="swiper-pagination-instagram"></div>
  </div>
</template>

<script>
export default {
  name: "CarouselPhotos",

  data() {
    return {
      items: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        // Responsive breakpoints
        breakpoints: {
          // when window width is <= 499px
          499: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is <= 999px
          999: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
        loop: true,
        autoplay: {
          delay: 5000,
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: "#swiper-pagination-instagram",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    }
  },

  mounted() {
    this.getInstagramFeed();

  },

  methods: {
    async getInstagramFeed() {
      this.$axios.$get('https://php.localidautore.it/rapidinsta/index.php?account=45563639268&count=12').then((res) => {
        console.log(res)
        this.items = res;
      })


    },
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.swiper-slide {


  img {
    width: 100%;
    object-fit: cover;
    object-position: center center;
    height: 300px;
  }
}

</style>
