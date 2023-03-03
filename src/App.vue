<template>

  <NavbarComponentVue/>
  <div class="container-fluid min">
    <router-view/>
  </div>
  <!-- <OurServicesVue/> -->
  <footerComponentVue/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=PT+Serif:ital@1&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap');
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
font-family: playfair display;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

.min {
  min-height: 85vh!important;
}
/* nav {
padding: 30px;
}

nav a {
font-weight: bold;
color: #2c3e50;
}

nav a.router-link-exact-active {
color: purple;
} */
</style>
<script>
import NavbarComponentVue from './components/NavbarComponent.vue'
// import OurServicesVue from './components/OurServices.vue'
import footerComponentVue from './components/footerComponent.vue'
export default {
  components: {
    NavbarComponentVue,
    footerComponentVue
  }
}
</script>
