<template>
  <section id="home">
    <div class="container py-3">
      <div class="row py-7">
        <div class="col-lg-7 pt-5 text-center">
          <h1>Entering the Digital<br> Verse</h1>
          <button class="btn1 mt-3" @click="scrollToProduct">View NFT's</button>
        </div>
      </div>
    </div>
    <div class="images">
      <div class="d-none d-md-block">
        <img src="https://i.postimg.cc/xCpfDGSC/AMETHYST2.gif" class="kreeD-Shape">
      </div>
    </div>
    <OurServices/>
  </section>
</template>

<style>
/* ===================================Landing Page================================================= */
#home {
  background: linear-gradient(to bottom, #4b0082, #000000);
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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

.container h1 {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  padding-top: 20%;
}

.images {
  width: 45%;
  height: 60%;
  position: absolute;
  bottom: 0;
  right: 100px;
  margin-bottom: 10%;
}

.images img {
  height: 100%;
  position: absolute;
  left: 50%;
  bottom: 0px;
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

<script>
import OurServices from '@/components/OurServices.vue'

export default {
  components: {
    OurServices
  }

}
</script>
