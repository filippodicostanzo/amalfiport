<template>
  <div>
    <HeaderPages image="header-contacts"/>
    <LeftPanelShort />
    <section class="contacts pt-5 position-relative">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-30 animate-box fadeInUp animated" data-animate-effect="fadeInUp">
            <h2 class="section-title">Contact <span>Us</span></h2>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-6">
            <h4>Marina Coppola</h4>
            <p v-if="$nuxt.$i18n.locale==='it'" class="text-justify">
              Il Pontile concepito per soddisfare le necessità, anche le più esigenti, di tutti i diportisti, offre la
              possibilità di un ottimo approdo ed allo stesso tempo la sicurezza di una scelta completa e di alto
              livello.
            </p>
            <p v-if="$nuxt.$i18n.locale==='en'" class="text-justify">
              The Coppola Marina-Dock has been conceived to satisfy all the yachtsman necessities, even the more
              demanding, and at the same time offer the possibility of an optimal landing place and the guarantee of a
              complete and high level choice.
            </p>


            <h4 class="text-capitalize">{{$t('title.contacts')}}</h4>
            <ul class="contacts-list">
              <li>
                <font-awesome-icon :icon="['fas', 'phone']"/>
                +39.089.873091
              </li>
              <li>
                <font-awesome-icon :icon="['fas', 'phone']"/>
                +39.347.3495280
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
          <div class="col-md-6">
            <h4>Contact Form</h4>
            <ContactForm/>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script>
  import ContactForm from "~/components/ContactForm";
  import LeftPanelShort from "~/components/LeftPanelShort";

  export default {
    name: "contacts.vue",
    components: {ContactForm, LeftPanelShort},
  }
</script>

<style lang="scss" scoped>
  @import "assets/scss/_variables.scss";

  h4 {
    color: $primary;
  }

  section {
    z-index: 1;
  }

  .contacts-list {
    li {
      color: $secondary;
      padding: 13px 0;

      a {
        color: $secondary
      }

      svg {
        margin-right: 5px
      }

    }
  }
</style>
