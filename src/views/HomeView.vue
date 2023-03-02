<template>
  <div class="container row py-3">
  <section id="home">
      <div class="py-7">
        <div class="col-6 pt-5">
          <h1>Unlock a world of unique <br> treasures with every NFT</h1>
          <!-- @click="scrollToProduct" -->
          <button class="btn1 mt-3" >View NFT's</button>
        </div>
      </div>
      <div class="images col-6">
        <div class="d-none d-md-block">
          <img src="https://i.postimg.cc/xCpfDGSC/AMETHYST2.gif" class="kreeD-Shape">
        </div>
    </div>
  </section>
  <!-- <OurServicesVue/> -->
  </div>
</template>
<script>
import OurServicesVue from '@/components/OurServices.vue';
export default {
  components: {
    OurServicesVue
  }
}
</script>

<style scoped>
/* ===================================Landing Page================================================= */
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

#home {
  background: linear-gradient(to bottom, #4b0082, #000000);
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

h1 {
  /* font-size: 1000px; */
  font-family: 'Fjalla One', sans-serif;
}

.btn1 {
    height: 45px;
    width: 35%;
    border: none;
    outline: none;
    background-color: purple;
    color: white;
    font-weight: 700;
    border-radius: 60px;
}

h1 {
  font-size: 4.5rem;
  padding-left: 120px;
  font-weight: 700;
  /* color: white; */
  /* color: linear-gradient(to right, #633980, #ffffff); */
  /* font-weight: 900; */
  text-transform: uppercase;
  background: -webkit-linear-gradient(rgb(105, 1, 105), rgb(255, 255, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 100px;
}

.images {
  width: 45%;
  height: 60%;
  position: absolute;
  bottom: 0;
  right: 350px;
  margin-bottom: 10%;
}

.kreeD-Shape {
  height: 550px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  top: 1px;
}

/* ==============================================Our Services================================================================ */
#Product {
  background-color: #d3b4ea;
  position: relative; /* Add position relative to enable top spacing */
  top: 20vh; /* Add negative top spacing to push section up */
  padding-top: 150px;
}

.container1 h1 {
  color: #000000;
}
</style>
