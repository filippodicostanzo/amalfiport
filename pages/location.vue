<template>
  <div>
    <HeaderPages image="header-location"/>
    <LeftPanelShort />
    <section class="location pt-5 position-relative">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <h2 class="section-title">Location</h2>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12">
            <h4 class="text-justify text-white" v-if="$nuxt.$i18n.locale==='it'">Il Pontile Coppola si trova nella parte
              più
              sicura e riparata del porto, protetto da tutte le avverse condizioni meteo-marine, avvolto in un
              abbraccio rassicurante dal Molo Foraneo.</h4>

            <h4 class="text-justify text-white" v-if="$nuxt.$i18n.locale==='en'">The Coppola Marina-Dock is
              set in the most sheltered and thus safest part of the port, protect from all the adverse
              weather-marine conditions, wrapped in a reassuring
              embrace by the outer dock.</h4>
          </div>
        </div>


        <div class="row mt-5">
          <div class="col-6">
            <div class="row">
              <div class="col-12 text-center"><i class="flaticon-coast icon-big"></i>
                <p>Piazzale dei Protontini, 6,<br> 84011 Amalfi SA</p></div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12 text-center"><i class="flaticon-city-map icon-big"></i>
                <p>Latitude: 40.6319575 <br> Longitude: 14.5976683</p></div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-12">
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
  </div>
</template>

<script>
  import HeaderPages from "~/components/HeaderPages";
  import LeftPanelShort from "~/components/LeftPanelShort";
  export default {
    name: "location.vue",
    components: {HeaderPages, LeftPanelShort},

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

<style scoped>

  section {
    z-index: 1;
  }

</style>
