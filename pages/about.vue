<template>
  <div>
    <HeaderPages image="header-about"/>
    <LeftPanelShort />
    <section class="about pt-5 position-relative">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">
            <h2 class="section-title">Chi <span>Siamo</span></h2>
            <p>Nel porto di Amalfi, il Pontile Coppola gestito dai fratelli Coppola, spinti dalla passione, impegno e
              dedizione per il mare e la nautica, grazie anche passione tramandata dai loro antenati ed alla loro
              esperienza trentennale, offre servizi di qualità con simpatia.</p>
            <p>La dedizione se non l'amore per questo lavoro ha fatto sì che il pontile Coppola è diventato l'approdo
              preferito per tutti gli appassionati del mare che da tutte le parti del mondo vengono in visita ad Amalfi.
            </p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">
            <h2 class="section-title">About <span>Us</span></h2>
            <p>In the port of Amalfi, the Coppola Marina-Dock, managed by the siblings Coppola, motivated by passion,
              commitment and dedication for the sea in general and seafaring in particular, thanks also to the passion
              handed down by their ancestors and to their over thirty years experience, offers services of quality with
              sympathy.</p>
            <p>The dedication, if not love, for their profession has resulted in the Coppola Marina-Dock to become the
              preferred location for all sea lovers who come to visit Amalfi from all over the world.</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-about-01.jpg')" class="img-fluid" alt=""></div>
            </div>
          </div>
        </div>


        <div class="row flex-row-reverse pt-5 align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">

            <p>Il Pontile Coppola si trova nella parte più sicura e riparata del porto, protetto da tutte le avverse
              condizioni meteo-marine, avvolto in un abbraccio rassicurante dal Molo Foraneo.</p>
            <p>Il Pontile concepito per soddisfare le necessità, anche le più esigenti, di tutti i diportisti, offre la
              possibilità di un ottimo approdo ed allo stesso tempo la sicurezza di una scelta completa e di alto
              livello.
            </p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">

            <p>The Coppola Marina-Dock is set in the most sheltered and thus safest part of the port, protect from all
              the adverse weather-marine conditions, wrapped in a reassuring embrace by the outer dock.</p>
            <p>The Coppola Marina-Dock has been conceived to satisfy all the yachtsman necessities, even the more
              demanding, and at the same time offer the possibility of an optimal landing place and the guarantee of a
              complete and high level choice.</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-about-02.jpg')" class="img-fluid" alt=""></div>
            </div>
          </div>
        </div>

        <div class="row  pt-5 align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">

            <p> Offre la possibilità di ormeggio per qualsiasi esigenza dal transito giornaliero, settimanale e mensile,
              alla sosta stagionale con assistenza all'arrivo ed in partenza, vigilanza diurna e notturna, con
              elettricità di 220 e 380 v., acqua corrente, ospitando natanti e yacht di tutte le dimensioni.</p>
            <p> Tutto questo a pochi passi dal centro, un approdo sicuro all'interno del Porto di Amalfi dove storia,
              mito, bellezze naturali, il clima mite contribuiscono alla vacanza perfetta. Ancor di più se affidata alla
              professionalità ed esperienza del Pontile Coppola.
            </p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">

            <p> It offers the possibility of mooring for any requirement from the daily temporary-mooring or weekly,
              monthly and seasonal stopover with arrival and departure assistance, diurnal and nocturnal vigilance,
              electricity 220 and 380 v., running water, with mooring for boats and yachts of all dimensions.</p>
            <p> All this just a few steps from the centre, a secure landing place inside the Port of Amalfi where
              natural history, myth, beauty and the mild climate contribute to the perfect vacation. Even more so if
              assisted by the professionalism and experience of the Coppola Marina-Dock
            </p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-about-03.jpg')" class="img-fluid" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import HeaderPages from "~/components/HeaderPages";
  import LeftPanelShort from "~/components/LeftPanelShort";

  export default {
    name: "about",
    components: {LeftPanelShort, HeaderPages}
  }
</script>

<style scoped>

  section {
    z-index: 1;
  }

  p {
    text-align: justify;
  }

</style>
