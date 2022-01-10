<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false" instance-name="swiper-photos">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item.id" v-for="item in carousel">
        <div class="position-relative o-hidden">
          <img :src="item.src" alt=""></div>
        <div class="con">
          <h6><a href="cotton-house.html">{{ item.title }}</a></h6>
          <h5><a href="cotton-house.html">{{ item.subtitle }}</a></h5>
          <div class="line"></div>
          <a href="cotton-house.html"><i class="ti-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselPhotos",
  data() {
    return {
      carousel: [
        {
          id: 'amalficoast-01',
          src: require('~/assets/images/amalficoast-01.jpg'),
          title: 'History',
          subtitle: 'Amalfi Coast'
        },
        {
          id: 'amalficoast-02',
          src: require('~/assets/images/amalficoast-02.jpg'),
          title: 'Beauty',
          subtitle: 'Amalfi Coast'
        }
      ],
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
            slidesPerView: 2,
            spaceBetween: 50,
          }
        },

        autoplay: {
          delay: 5000,
        },

        pagination: {
          el: "#swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.swiper-slide {

  &:hover {
    .line {
      width: 100%;
      transition-property: all;
      transition-duration: 0.8s;
      transition-timing-function: ease-in-out;
    }

    .con {
      bottom: 0;
    }
  }

  img {
    width: 100%;
  }

  .con {
    padding: 60px 15px;
    position: absolute;
    bottom: -58px;
    left: 0;
    width: 100%;
    -webkit-transition: all .3s;
    transition: all .3s;
    text-align: center;
    z-index: 20;
    height: auto;
    box-sizing: border-box;
    background: -moz-linear-gradient(top, transparent 0, rgba(0, 0, 0, .1) 2%, rgba(0, 0, 0, .75) 90%);
    background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 2%, rgba(0, 0, 0, .75) 90%);
    background: linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, .01) 2%, rgba(0, 0, 0, .75) 90%);

    h5 {
      a {
        position: relative;
        color: #fff;
        font-size: 20px;
        font-weight: 300;
        margin-top: 0px;
        margin-bottom: 10px;
        letter-spacing: 5px;
        text-transform: uppercase;
      }
    }

    h6 {
      a {
        position: relative;
        color: $primary;
        font-size: 13px;
        font-weight: 400;
        margin-top: 0px;
        margin-bottom: 10px;
        letter-spacing: 5px;
        text-transform: uppercase;
      }
    }
  }

  .line {
    text-align: center;
    height: 1px;
    width: 60px;
    background-color: rgba(255, 255, 255, 0.2);
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    margin: 0 auto 30px;
  }
}

</style>
