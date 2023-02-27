<template>
  <navbar-component/>
  <router-view/>
  <footer-component/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=PT+Serif:ital@1&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap');

#app {
  font-family: playfair display;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: purple;
}
</style>
<script>
import NavbarComponent from './components/NavbarComponent.vue'
import footerComponent from './components/footerComponent.vue'
export default {
  components: {
    NavbarComponent,
    footerComponent
  }
}
</script>
