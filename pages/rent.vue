<template>
  <div>
    <HeaderPages image="header-services"/>
    <LeftPanelShort/>
    <section class="about pt-5 position-relative">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">
            <h2 class="section-title">Noleggio <span>Barche</span></h2>

            <p>Presso il nostro pontile sarà possibile <span class="highlights">noleggiare gommoni</span> senza bisogno
              di licenza, per scoprire tutte le meraviglie della Codtiera Amalfitana dalla
              migliore prospettiva possibile: via mare!
              <br><span class="highlights"> Per richiedere informazioni +39 347 3495280 o +39 339 4224484</span>
            </p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">
            <h2 class="section-title">Rent a <span>Boat</span></h2>
            <p>At our pier you can <span class="highlights">rent inflatable boats</span> without the need for a license,
              to discover all the wonders of the Amalfi Coast from the best possible perspective: by sea!
              <br><span class="highlights"> For more information +39 347 3495280 or +39 339 4224484</span>
            </p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-rent-01.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "rent.vue"
}
</script>

<style scoped>

</style>
