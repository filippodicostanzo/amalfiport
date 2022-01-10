<template>
  <div>
    <HeaderPages image="header-excursions"/>
    <LeftPanelShort />
    <section class="excursions pt-5 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title" v-if="$nuxt.$i18n.locale==='it'">Le Nostre <span>Escursioni</span></h2>
            <h2 class="section-title" v-if="$nuxt.$i18n.locale==='en'">Our <span>Excursions</span></h2>
          </div>
        </div>


        <div class="row">
          <div class="col-md-6 item mb-30" v-for="item in excursions"  @click="showModal(item)">
            <div class="item position-relative overflow-hidden">
              <div class="position-relative">
                <img :src="require('~/assets/images/'+item.id+'-01.jpg')" alt="">
              </div>
              <div class="con cursor-pointer">
                <h6> Excursions</h6>
                <h5>{{ item.name.it }}</h5>
                <div class="line"></div>
                <a href="cotton-house.html"><i class="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import excursions from "~/static/data/excursions.json";
  import HeaderPages from "~/components/HeaderPages";
  import LeftPanelShort from "~/components/LeftPanelShort";
  import Modal from "~/components/Modal";

  export default {
    name: "excursions",
    components: {HeaderPages, LeftPanelShort},
    data() {
      return {
        excursions: []
      }
    },

    fetch() {
      this.excursions = excursions.excursions;
    },

    methods: {
      showModal(item) {
        console.log(window.innerWidth)
        if (window.innerWidth > 768) {
          this.$modal.show(Modal, {item}, {scrollable: true, height: "auto", width: "60%"});
        } else {
          this.$modal.show(Modal, {item}, {scrollable: true, height: "auto", width: "90%"});
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

  @import 'assets/scss/variables';

  section {
    z-index: 1;
  }

  .mb-30 {
    margin-bottom: 30px;
  }

  .excursions {

    .item {

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

          position: relative;
          color: #fff;
          font-size: 20px;
          font-weight: 300;
          margin-top: 0px;
          margin-bottom: 10px;
          letter-spacing: 5px;
          text-transform: uppercase;

        }

        h6 {

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
  }
</style>
