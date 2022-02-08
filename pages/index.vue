<template>

  <div>
    <section class="about pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div v-if="$nuxt.$i18n.locale==='it'">
              <h2 class="section-title">Chi Siamo <span></span></h2>
              <p>Nel porto di Amalfi, il Pontile Coppola gestito dai fratelli Coppola, spinti dalla passione, impegno e
                dedizione per il mare e la nautica, grazie anche passione tramandata dai loro antenati ed alla loro
                esperienza trentennale, offre servizi di qualità con simpatia.</p>
              <p>La dedizione se non l'amore per questo lavoro ha fatto sì che il pontile Coppola è diventato l'approdo
                preferito per tutti gli appassionati del mare che da tutte le parti del mondo vengono in visita ad
                Amalfi.
              </p>
            </div>
            <div v-if="$nuxt.$i18n.locale==='en'">
              <h2 class="section-title">About <span>Us</span></h2>
              <p class="text-justify">In the port of Amalfi, the Coppola Marina-Dock, managed by the siblings Coppola,
                motivated by passion,
                commitment and dedication for the sea in general and seafaring in particular, thanks also to the passion
                handed down by their ancestors and to their over thirty years experience, offers services of quality
                with
                sympathy.</p>
              <p class="text-justify">The dedication, if not love, for their profession has resulted in the Coppola
                Marina-Dock to become the
                preferred location for all sea lovers who come to visit Amalfi from all over the world.</p>
            </div>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/slider-01.jpg')" class="img-fluid" alt=""></div>
              <div class="about-img-2 about-buro">
                <nuxt-link :to="localePath('about')" tag="a"> {{ $t('buttons.read_more') }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="amalficoast pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">Amalfi <span>Coast</span></h2>
          </div>
          <div class="col-md-12">
            <CarouselPhotos/>
          </div>

        </div>
        <div class="row">
          <div class="col-md-12 pt-5 two-columns" v-if="$nuxt.$i18n.locale==='it'">
            <p>La leggenda vuole che Amalfi sia stata fondata da Ercole in nome della sua amata ninfa, la quale ebbe
              breve vita. Ercole la volle seppellire nel posto più bello del mondo in cui, a testimonianza di un grande
              amore, fondò una città che portasse il suo nome.</p>
            <p>L'ipotesi storica invece racconta che Amalfi trarrebbe le sue origini da famiglie romane che, imbarcate
              per Costantinopoli, furono travolte da una tempesta nel golfo di Policastro; avrebbero così fondato una
              "Melphes", l'attuale Melfi poi, trasferitisi più a nord, avrebbero preso dimora nel luogo dell'attuale
              Amalfi, fondandola col nome di "A-Melphes". Infatti sotto lo stemma della città c'è la scritta: discende
              da patrizi romani.</p>
            <p>Le prime notizie certe di Amalfi risalgono al 533, al tempo della guerra gotica allorché, con la vittoria
              di Narsete su Teia, Amalfi passò sotto il dominio dell'impero Bizantino ed entrò a far parte del ducato di
              Napoli. Sottoposta ai Bizantini, divenne un centro di traffici tra l'Oriente e l'Italia meridionale.</p>
          </div>

          <div class="col-md-12 pt-5 two-columns" v-if="$nuxt.$i18n.locale==='en'">
            <p>The legend wants Amalfi to have been founded by Hercules in name of his beloved nymph, Amalphi. Hercules
              wanted to bury her in the most enchanting place on earth in which, to testimony of his great love, he
              founded a city with her name.</p>
            <p>An historical hypothesis, sustains instead, that Amalfi draws its origins from Roman families on their
              way to Constantinople, crushed in a storm in the gulf of Policastro; they would have so founded one
              "Melphes", the actual Melfi then transferred more to north, took abode in the actual Amalfi, calling it
              with the name "Á.-Melphes". As matter of fact on the city symbol there is the wrinting: descendant from
              roman nobles</p>
            <p>The first definite news about Amalfi goes back to 533, at the time of the Gothic war when, with the
              victory of Narsete over Teia, Amalfi passed under the dominion of the Byzantine empire belonging to the
              dukedom of Naples. Submitted to the Byzantines, it became a commercial trade center between the east and
              southern Italy.</p>
          </div>
          <div class="col-md-12 text-center pt-5">
            <nuxt-link :to="localePath('amalficoast')">
              <button class="btn-dark"> {{ $t('buttons.read_more') }}</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="services pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">Our <span>Services</span></h2>
          </div>
        </div>
        <div class="row">
          <CarouselServices/>
        </div>
        <div class="row">
          <div class="col-md-12 text-center pt-5">
            <nuxt-link :to="localePath('services')">
              <button class="btn-dark"> {{ $t('buttons.read_more') }}</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="rent pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div v-if="$nuxt.$i18n.locale==='it'">
              <h2 class="section-title">Noleggio <span>Barche</span></h2>
              <p>Presso il nostro pontile sarà possibile <span class="highlights">noleggiare gommoni</span> senza bisogno
                di licenza, per scoprire tutte le meraviglie della Codtiera Amalfitana dalla
                migliore prospettiva possibile: via mare!</p>
              <p><span class="highlights"> Per richiedere informazioni +39 347 3495280 o +39 339 4224484</span></p>
            </div>
            <div v-if="$nuxt.$i18n.locale==='en'">
              <h2 class="section-title">Rent <span>Boat</span></h2>
              <p class="text-justify">At our pier you can <span class="highlights">rent inflatable boats</span> without the need for a license,
                to discover all the wonders of the Amalfi Coast from the best possible perspective: by sea!</p>
              <p><span class="highlights"> For more information +39 347 3495280 or +39 339 4224484</span></p>
            </div>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="rent-img">
              <div class="img"><img :src="require('assets/images/box-rent-01.jpg')" class="img-fluid" alt=""></div>
              <div class="rent-img-2 about-buro">
                <nuxt-link :to="localePath('rent')" tag="a"> {{ $t('buttons.read_more') }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="excursions pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">Our <span>Excursions</span></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <CarouselExcursions/>
          </div>
        </div>
      </div>
    </section>

    <section class="location pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="section-title">Where <span>We Are</span></h2>
            <h4 class="text-white"> Porto di Amalfi</h4>
            <div class="row">
              <div class="col-1"><i class="flaticon-placeholder icon-big"></i></div>
              <div class="col-11">

                <p class="text-justify" v-if="$nuxt.$i18n.locale==='it'">Il Pontile Coppola si trova nella parte più
                  sicura e riparata del porto, protetto da tutte le avverse condizioni meteo-marine, avvolto in un
                  abbraccio rassicurante dal Molo Foraneo.</p>

                <p class="text-justify" v-if="$nuxt.$i18n.locale==='en'">The Coppola Marina-Dock is
                  set in the most sheltered and thus safest part of the port, protect from all the adverse
                  weather-marine conditions, wrapped in a reassuring
                  embrace by the outer dock.</p>


              </div>
            </div>
            <div class="row">
              <div class="col-1"><i class="flaticon-coast icon-big"></i></div>
              <div class="col-11"><p>Piazzale dei Protontini, 6,<br> 84011 Amalfi SA</p></div>
            </div>
            <div class="row">
              <div class="col-1"><i class="flaticon-city-map icon-big"></i></div>
              <div class="col-11"><p>Latitude: 40.6319575 <br> Longitude: 14.5976683</p></div>
            </div>
          </div>
          <div class="col-md-6">
            <GMap
              ref="gMap"
              language="en"
              :cluster="{options: {styles: clusterStyle}}"
              :center="{lat: locations[0].lat, lng: locations[0].lng}"
              :options="{fullscreenControl: false, styles: mapStyle}"
              :zoom="13"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{lat: location.lat, lng: location.lng}"
                @click="currentLocation = location"
              >
                <!-- :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"-->

                <GMapInfoWindow :options="{maxWidth: 300}">

                  <!--                  <Logo/>-->
                  <p class="text-center mt-4">Piazzale dei Protontini 6 - Amalfi</p>

                </GMapInfoWindow>
              </GMapMarker>
              <GMapCircle :options="circleOptions"/>
            </GMap>
          </div>
        </div>
      </div>
    </section>
    <section class="instagram pt-10">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-title">Instagram <span>Feed</span></h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <CarouselInstagram/>
          </div>
        </div>
      </div>
    </section>
    <section class="contacts pt-10">
      <div class="background pt-10" data-overlay-dark="3"
           :style="{'background-image': 'url('+require('~/assets/images/background-contacts.jpg')+ ')'}">
        <div class="container">
          <div class="row">
            <!-- Promo video -->
            <div class="col-md-6">

            </div>
            <!-- Testiominals -->
            <div class="col-md-5 offset-md-1">
              <div class="contacts-box animate-box fadeInUp animated" data-animate-effect="fadeInUp">
                <div class="head-box">
                  <h4>Quick Contacts</h4>
                </div>
                <div>
                  <ul>
                    <li>
                      <font-awesome-icon :icon="['fas', 'phone']"/>
                      +39.347.3495280
                    </li>
                    <li>
                      <font-awesome-icon :icon="['fas', 'phone']"/>
                      +39.339.4224484
                    </li>
                    <li>
                      <font-awesome-icon :icon="['fas', 'envelope']"/>
                      <a href="mailto:info@portoamalfi.com">info@portoamalfi.com</a><br>
                    </li>
                    <li>
                      <font-awesome-icon :icon="['fas', 'info-circle']"/>
                      VAT ID IT05402330657
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselPhotos from "~/components/CarouselPhotos";
import CarouselExcursions from "~/components/CarouselExcursions";
import CarouselInstagram from "~/components/CarouselInstagram";
import CarouselServices from "~/components/CarouselServices";

export default {
  components: {CarouselExcursions, CarouselPhotos, CarouselServices, CarouselInstagram},
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 40.6319575,
          lng: 14.5976683
        },
      ],/*
                pins: {
                    selected: "data:image/png;base64,iVBORw0KGgo...",
                    notSelected: "data:image/png;base64,iVBORw0KGgo..."
                },*/
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  }
}
</script>
