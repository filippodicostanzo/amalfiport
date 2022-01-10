<template>
  <div>
    <div class="b-sidebar-backdrop" ref="backdrop" @click="closeSidebar"></div>

    <div class="b-sidebar-right b-sidebar" ref="sidemenu">
      <button class="close-button" @click="closeSidebar">
        <font-awesome-icon :icon="['fas', 'times']"/>
      </button>
      <div class="lang-box text-center mt-4">
        <div class="language">

          <ul>
            <li>
              <font-awesome-icon :icon="['fas', 'globe']"/>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('it')" exact>
                IT
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="switchLocalePath('en')" exact>
                EN
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <nav class="mobile-menu">
          <b-nav-item>
            <nuxt-link :to="localePath('/')" tag="a"><span @click="$nuxt.$emit('close-sidemenu')" exact class="text-uppercase">Home</span>
            </nuxt-link>
          </b-nav-item>
          <b-nav-item v-for="item in menu" :key="item.slug">
            <nuxt-link :to="localePath(item.slug)" tag="a"><span @click="$nuxt.$emit('close-sidemenu')" exact class="text-uppercase">{{$t('menu.'+item.name)}}</span>
            </nuxt-link>
          </b-nav-item>
      </nav>

      <div class="lang-box text-center mt-4">
        <div class="language">

          <ul>

            <li><a href="https://www.instagram.com/marinacoppola_amalfi/" target="_blank"><i class="flaticon-instagram-logo"></i></a></li>
            <li><a href="https://www.facebook.com/portoamalfi/" target="_blank"><i class="flaticon-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import menu from '~/static/data/menu.json'


  export default {
    name: "Sidenav",

    methods: {
      closeSidebar() {
        this.$nextTick(() => {
          this.$refs.sidemenu.classList.remove('slide-in');
          this.$refs.sidemenu.classList.add('slide-out')
          this.$refs.backdrop.classList.remove('backdrop-on');
          this.$refs.backdrop.classList.add('backdrop-off');

        });
      }
    },

    mounted() {
      this.$nuxt.$on('open-sidemenu', () => {
        this.$nextTick(() => {
          this.$refs.sidemenu.classList.remove('slide-out');
          this.$refs.sidemenu.classList.add('slide-in');
          this.$refs.backdrop.classList.remove('backdrop-off');
          this.$refs.backdrop.classList.add('backdrop-on');
          console.log('a');
        });
      });

      this.$nuxt.$on('close-sidemenu', () => {
        this.$nextTick(() => {
          console.log('CLOSE');
          this.$refs.sidemenu.classList.remove('slide-in');
          this.$refs.sidemenu.classList.add('slide-out')
          this.$refs.backdrop.classList.remove('backdrop-on');
          this.$refs.backdrop.classList.add('backdrop-off');

        });
      })
    },

    fetch() {
      this.menu = menu.menu;
    }

  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .mobile-menu {
    li{
      font-family: $Oswald;
      font-size: 20px;
      text-align: center;
      padding: 5px 0;
    }
  }

  .close-button {
    position: absolute;
    top: 2rem;
    left: 30px;
    border: 0;
    background: transparent;
    color: $primary;
  }

  .lang-box {
    padding: 10px;

    a {
      opacity: 0.6;
    }

    a.nuxt-link-active {
      opacity: 1;
    }

    .language {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          display: inline-flex;
          padding: 0 8px;
        }
      }
    }


  }

  .backdrop-on {
    z-index: 999;
    background-color: black;
    animation: opacity-on 0.5s ease-in;
    -webkit-animation: opacity-on 0.5s ease-in;

  }

  .backdrop-off {
    animation: opacity-off 0.5s ease-out;
    -webkit-animation: opacity-off 0.5s ease-out;
  }

  .b-sidebar-right {
    z-index: 999;
    right: 0;
    transform: translateX(320px);
    -webkit-transform: translateX(320px);
    background: $background;
  }

  .slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
  }

  .slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
  }

  @keyframes opacity-on {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1 !important;
    }
  }

  @-webkit-keyframes opacity-on {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1 !important;
    }
  }

  @keyframes opacity-off {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes opacity-off {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(0%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(320px);
    }
  }

  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(320px);
    }
  }
</style>
