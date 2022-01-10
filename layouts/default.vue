<template>
  <div>
    <Navbar/>

    <div v-if="homePage()">
      <Header/>
      <div class="content-wrapper">
        <section class="content-lines-wrapper">
          <div class="content-lines-inner">
            <div class="content-lines"></div>
          </div>
        </section>
        <Nuxt/>
      </div>
    </div>

    <div v-else>
      <div class="content-wrapper">
        <section class="content-lines-wrapper">
          <div class="content-lines-inner">
            <div class="content-lines"></div>
          </div>
        </section>
        <Nuxt/>
      </div>
    </div>

    <Sidenav/>
    <BackToTop/>
    <CookieControl :locale="this.$i18n.locale"/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from "~/components/Navbar";
  import Header from "~/components/Header";
  import Footer from "~/components/Footer";
  import Sidenav from "~/components/Sidenav";
  import BackToTop from "~/components/BackToTop";

  export default {
    name: "default.vue",


    head() {
      return {
        title: 'Porto di Amalfi - Marina Coppola',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Posti unità da diporto fino a mt. 35 - Profondità da mt. 8 a mt. 11 - Acqua, energia elettrica 220V-380V fino a 125A, Skipper per qualsiasi destinazione, Vigilanza Notturna, Assistenza All&#39;Arrivo, Meccanico + Elettrauto, Lavanderia, Cambusa a Bordo'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'amalfi, porto, harbour, ormeggio, ormeggi, mooring, yacht, Pontile Marina Coppola, amalfi coast, costiera amalfitana'
          }
        ],

            bodyAttrs: {
              class: (this.homePage() ? 'ishome' : ''), //how to get classes already setted in default.vue like my has-navbar-fixed-top class
            }

      }
    },

    components: {Footer, Header, Navbar, Sidenav, BackToTop},


    methods: {

      homePage() {
        if (this.$route.path === "/" || this.$route.path === "/it") {
          return true
        } else {
          return false
        }
      }

    }
  }
</script>

<style scoped>

</style>
