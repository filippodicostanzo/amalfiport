<template>
  <footer class="pt-10">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center">
          <a href="#" @click="showModal('privacy')">Privacy Policy</a> -
          <a href="#" @click="showModal('cookie')">Cookie Policy</a>
        </div>
        <div class="col-md-6 text-center">
          <p>Made with
            <font-awesome-icon :icon="['fas', 'heart']"/>
            <a target="blank_" href="https://www.localidautore.it">by Locali D'Autore</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ModalCookie from "~/components/ModalCookie";
import ModalPrivacy from "~/components/ModalCookie";

export default {
  name: "Footer.vue",

  methods: {
    showModal(item) {
      if (item === 'cookie') {
        console.log(window.innerWidth)
        if (window.innerWidth > 768) {
          this.$modal.show(ModalCookie, {item}, {scrollable: true, height: "auto", width: "60%"});
        } else {
          this.$modal.show(ModalCookie, {item}, {scrollable: true, height: "auto", width: "90%"});
        }
      }
      else if (item==='privacy') {
        if (window.innerWidth > 768) {
          this.$modal.show(ModalPrivacy, {item}, {scrollable: true, height: "auto", width: "60%"});
        } else {
          this.$modal.show(ModalPrivacy, {item}, {scrollable: true, height: "auto", width: "90%"});
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
