<template>
  <div>
    <div class="mobile-menu-btn">
      <button  @click="$nuxt.$emit('open-sidemenu')">
        <font-awesome-icon :icon="['fas', 'bars']"/>
      </button>
    </div>
    <nav class="navbar navbar-expand-lg">
      <!-- Logo -->
      <div class="logo-wrapper valign">
        <nuxt-link :to="localePath('/')" tag="a" class="text-decoration-none">
          <div class="logo">
            <img :src="require('@/assets/images/logo.svg')"/>
            <h2><span class="big">PORTO DI</span>AMALFI<span class="small">MARINA COPPOLA</span></h2>
          </div>
        </nuxt-link>
      </div>
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="item in menu" :key="item.slug">
            <nuxt-link tag="a" :to="localePath(item.slug)" exact class="nav-link">{{ $t('menu.' + item.name) }}
            </nuxt-link>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import menu from '~/static/data/menu.json'

  export default {
    name: "Navbar.vue",
    data() {
      return {
        menu: []
      }
    },
    fetch() {
      this.menu = menu.menu;
    }
  }
</script>

<style scoped>

</style>
