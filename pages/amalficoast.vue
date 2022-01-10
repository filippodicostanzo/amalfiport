<template>
  <div>
    <HeaderPages image="header-amalficoast"/>
    <LeftPanelShort />
    <section class="about pt-5 position-relative">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">
            <h2 class="section-title">La <span>Storia</span></h2>
            <p>La leggenda vuole che Amalfi sia stata fondata da Ercole in nome della sua amata ninfa, la quale ebbe
              breve vita. Ercole la volle seppellire nel posto più bello del mondo in cui, a testimonianza di un grande
              amore, fondò una città che portasse il suo nome.</p>
            <p>L'ipotesi storica invece racconta che Amalfi trarrebbe le sue origini da famiglie romane che, imbarcate
              per Costantinopoli, furono travolte da una tempesta nel golfo di Policastro; avrebbero così fondato una
              "Melphes", l'attuale Melfi poi, trasferitisi più a nord, avrebbero preso dimora nel luogo dell'attuale
              Amalfi, fondandola col nome di "A-Melphes". Infatti sotto lo stemma della città c'è la scritta: discende
              da patrizi romani.</p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">
            <h2 class="section-title">The <span>History</span></h2>
            <p>The legend wants Amalfi to have been founded by Hercules in name of his beloved nymph, Amalphi. Hercules
              wanted to bury her in the most enchanting place on earth in which, to testimony of his great love, he
              founded a city with her name.</p>
            <p>An historical hypothesis, sustains instead, that Amalfi draws its origins from Roman families on their
              way to Constantinople, crushed in a storm in the gulf of Policastro; they would have so founded one
              "Melphes", the actual Melfi then transferred more to north, took abode in the actual Amalfi, calling it
              with the name "Á.-Melphes". As matter of fact on the city symbol there is the wrinting: descendant from
              roman nobles.</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-amalficoast-01.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row flex-row-reverse pt-5 align-items-center">
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">
            <p>Le prime notizie certe di Amalfi risalgono al 533, al tempo della guerra gotica allorché, con la vittoria
              di Narsete su Teia, Amalfi passò sotto il dominio dell'impero Bizantino ed entrò a far parte del ducato di
              Napoli. Sottoposta ai Bizantini, divenne un centro di traffici tra l'Oriente e l'Italia meridionale.</p>
            <p>Amalfi si costituì, intorno all'850, in una Repubblica autonoma retta da due magistrati che,
              successivamente, si fecero chiamare duchi. La città seppe tenere, per ragioni di commercio, ottimi
              rapporti con tutti i poteri in Italia ed anche con il mondo mussulmano; rapporti, quest'ultimi, che poi
              ruppe per schierarsi con i papi.</p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">
            <p>The first definite news about Amalfi goes back to 533, at the time of the Gothic war when, with the
              victory of Narsete over Teia, Amalfi passed under the dominion of the Byzantine empire belonging to the
              dukedom of Naples. Submitted to the Byzantines, it became a commercial trade center between the east and
              southern Italy.</p>
            <p>Amalfi was constituted, around the 850, in an autonomous Republic held up by two judges subsequently
              called dukes. The city of Amalfi, kept for commercial reasons, good relationships with all the powerful
              entities in Italy and also with the Muslim world.</p>
          </div>

          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-amalficoast-02.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>


        <div class="row align-items-center pt-5">
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">

            <p>Nel X secolo diventava una potenza marinara e con le sue navi solcava tutti i mari, dal Mediterraneo
              all'Estremo Oriente, sviluppando un commercio fiorente che produceva ingenti ricchezze per i suoi
              abitanti.</p>
            <p>Si sviluppavano anche l'arte e la cultura, venivano create delle regole commerciali, nasceva il Codice
              del Diritto marittimo internazionale, i navigatori perfezionavano la bussola (all'Amalfitano Flavio Gioia
              va il merito di averla inventata).
            </p>
          </div>
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">

            <p>The latter relationships broke whwn Amalfi took sides with the popes providing ships and funds for the
              first crusades. In the X century it became the most powerful seafaring republic and with its ships
              navigating all the seas, from the Mediterranean in the extreme East, developing a flourishing commerce
              that produced huge wealth for its inhabitants. </p>
            <p>It also developed the art and culture, created some commercial rules, the Code of the International
              Maritime Right was edited, Amalfi navigators improved the compass (the Amalfitan Flavio Gioa takes credit
              for inventing it).</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-amalficoast-03.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row flex-row-reverse pt-5 align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">
            <h2 class="section-title">Tabula <span>Amalfitana</span></h2>
            <p>La Tabula Amalphitana è il prezioso documento, risalente alla fine dell'XI o agli inizi del XII secolo,
              che contiene le leggi e le consuetudini marittime della gloriosa repubblica marinara di Amalfi. Tali
              norme, riconosciute valide e adottate da diverse potenze marinare, costituirono per diversi secoli il
              codice universale del commercio per tutto il Mediterraneo.</p>
            <p>Composto di 66 capitoli, 21 dei quali in latino, l'importante documento è oggi conservato, in una
              redazione del XV secolo, nel Museo Civico di Amalfi ospitato in palazzo Morelli, attualmente sede comunale
              della nota cittadina.</p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">
            <h2 class="section-title">Tabula <span>Amalfitana</span></h2>
            <p>The Tabula Amalphitana is a precious document dating back to the end of the eleventh or the beginning of
              the twelfth century, that contains the laws and the seafaring customs of the glorious maritime republic of
              Amalfi. These regulations, recognised as valid and adopted by various maritime powers, for many centuries
              made up the universal trading code for the entire Mediterranean.</p>
            <p>Composed of 66 articles, 21 in Latin, the important document is today housed in a fifteenth-century
              version, in the Amalfi Civic Museum housed in the Morelli palace, currently the municipal headquarters of
              the famous township.</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-amalficoast-04.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row  pt-5 align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">
            <h2 class="section-title">Massimo <span>Splendore</span></h2>
            <p>Nel 1048 gli Amalfitani fondarono l'Ospedale di S. Giovanni a Gerusalemme da cui trasse poi il nome
              l'Ordine dei Cavalieri Ospitalieri, oggi Cavalieri di Malta. </p>
            <p> La città raggiunse il massimo splendore nella prima metà del secolo XI ma, nel 1073, sottomessa dai
              Normanni, vide iniziare la sua decadenza: venne a conflitto con Venezia e Bisanzio, tra loro alleate, e
              perse molte delle influenze e privilegi che contava in Oriente. Nel 1131 fu annessa al Regno di Sicilia e
              qualche anno dopo veniva attaccata e saccheggiata due volte da Pisa (1135 e 1137).</p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">
            <h2 class="section-title">Maximum <span>Splendor</span></h2>
            <p>In 1048 the Amalfitans founded the hospital of S. John in Jerusalem from which it drew then the name the
              order of the Ospitalier Knight, nowdays Knights of Malta.</p>
            <p>The city reached the maximum splendour in the first half of the XI century but, in 1073, subdued by the
              Normans, it began its decadence: it came to conflict with Venice and Bisanzio, among them allied, and lost
              a lot of the influences and privileges that it hadin the East. In 1131 it became part of the Kingdom of
              Sicily and a few years later it was attached and ransacked twice by Pisa (1135 and 1137).
              It had a brief revival in the XIII century under Frederick the II.</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-amalficoast-05.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row flex-row-reverse pt-5 align-items-center">

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='it'">

            <p> Ebbe un'apparente ripresa nel XIII secolo sotto Federico II. Nel 1343 uno spaventoso maremoto, descritto
              dal Petrarca, investì la costiera; gran parte dell'abitato andò distrutto (con esso probabilmente anche il
              palazzo Ducale, citato in un documento come "palatium amalphitanum"), furono sommerse le fortificazioni, i
              cantieri navali, i magazzini e le attrezzature marittime.</p>
            <p>Cinque anni dopo, la famosa peste del 1348, descritta dal Boccaccio, completò l'opera di distruzione fra
              gli uomini. Amalfi e tutte le cittadine della costa che erano state splendide località popolate e
              fortificate, ricche di sontuosi palazzi, ornati di affreschi, marmi, colonne, fontane, si avviavano a
              diventare modesti paesi che, privi della ricchezza che veniva dal mare, ritornarono alla economia
              tradizionale della pesca, dell'artigianato locale e dell'agricoltura.</p>
          </div>

          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp"
               v-if="$nuxt.$i18n.locale==='en'">

            <p> In 1343 a dreadful seaquake, described by Petrarca, invested the coastline; most part of the inhabited
              area was destroyed (with it probably also the Ducal Palace, quoted in a document as "palatium
              amalphitanum"), the fortifications, the shipyards, the stores and the maritime equipments were
              submerged.</p>
            <p>Five years later, the 1348 famous plague, described by Boccaccio, completed the work of destruction among
              the population. Amalfi and all the towns of the coast which had been splendid strengthen populated cities,
              rich of sumptuous buildings, adorned of frescos, marbles, columns, fountains, set out to become modest
              countries that, deprived of the wealth that came from the sea, returned to the traditional economy of
              fishing, of local craftsmanship and agriculture.</p>
          </div>
          <div class="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <div class="about-img">
              <div class="img"><img :src="require('assets/images/box-amalficoast-06.jpg')" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="row pt-5">
          <div class="col-12" v-if="$nuxt.$i18n.locale==='it'">
            <h4> Amalfi esce praticamente dalla scena delle grandi città marinare ed incomincia il cammino per diventare
              una delle località turistiche più famose nel mondo.</h4>
          </div>
          <div class="col-12" v-if="$nuxt.$i18n.locale==='en'">
            <h4>Amalfi practically goes out of the scene of the great seafaring cities and slowly started it way to
              become one of the most famous tourist places in the world.</h4>
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
    components: {HeaderPages, LeftPanelShort}
  }
</script>

<style lang="scss" scoped>

  @import "assets/scss/_variables.scss";

  section {
    z-index: 1;
  }

  p {
    text-align: justify;
  }

  h4 {
    color: $primary;
    font-weight: 300;
    text-align: center;
  }
</style>
