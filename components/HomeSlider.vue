<template>
  <div>
    <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false" instance-name="swiper-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides">

          <div class="image-layer"
               :style="{'background-image': 'url('  + slide.image + ')'}"
               data-overlay-dark="3">

            <div class="v-middle caption mt-30">
              <div class="container">
                <div class="row">
                  <div class="col-md-7 offset-md-5">
                    <div class="o-hidden">
                      <h1 class="animate__animated animate__fadeInUp animate__delay-2s">
                        <lang v-if="$nuxt.$i18n.locale==='it'"> {{slide.title.it}} </lang>
                        <lang v-if="$nuxt.$i18n.locale==='en'"> {{slide.title.en}} </lang>
                      </h1>
                      <p class="animate__animated animate__fadeInUp animate__delay-3s">
                        <lang v-if="$nuxt.$i18n.locale==='it'"> {{slide.text.it}}</lang>
                        <lang v-if="$nuxt.$i18n.locale==='en'"> {{slide.text.en}}</lang>
                      </p>

                      <div class="butn-light mt-5 mb-5  mr-3 animate__animated animate__fadeInUp animate__delay-1s">
                        <nuxt-link tag="a" :to="localePath(slide.link)">
                          <span>{{$t('buttons.read_more')}}</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
    <div class="swiper-pagination" id="swiper-pagination"></div>
  </div>
</template>

<script>
  export default {
    name: "HomeSlider",
    data() {
      return {
        slides: [
          {
            id: "1",
            title: {it: 'Nel Cuore di Amalfi', en: 'In the heart of Amalfi'},
            text: {
              it: 'Un approdo sicuro per ormeggiare la vostra imbarcazione nella baia di Amalfi',
              en: 'A safe landing place to moor your boat in the bay of Amalfi'
            },
            image: require('assets/images/slider-01.jpg'),
            link: 'about'
          },
          {
            id: "2",
            title: {it: 'Un Servizio Professionale', en: 'A Professional Service'},
            text: {
              it: 'Un servizio efficiente e professionale accompagnerà il vostro soggiorno in Costiera Amalfitana',
              en: 'An efficient and professional service will accompany your stay on the Amalfi Coast'
            },
            image: require('assets/images/slider-02.jpg'),
            link: 'services'
          },
          {
            id: "3",
            title: {it: 'La Magia della Costiera', en: 'The Magic of the Amalfi Coast'},
            text: {
              it: 'Lungo le rotte di Omero, ti porteremo alla scoperta degli scorci più incantevoli della Costa d’Amalfi',
              en: 'Along the routes of Homer, we will take you to discover the most enchanting views of the Amalfi Coast'
            },
            image: require('assets/images/slider-03.jpg'),
            link: 'excursions'
          }
        ],
        swiperOption: {
          slidesPerView: 1,
          centeredSlides: true,
          // Responsive breakpoints
          breakpoints: {
            // when window width is <= 499px
            499: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            // when window width is <= 999px
            999: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1240: {
              slidesPerView: 1,
              centeredSlides: true
            }
          },
          loop: true,
          autoplay: {
            delay: 5000,
          },
          loopFillGroupWithBlank: true,
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

<style scoped>

</style>
