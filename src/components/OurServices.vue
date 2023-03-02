<template>
  <section class="container" id="Services">
    <div class="position-relative d-flex align-items-center justify-content-center">
      <h3 class="display-2 text-uppercase text-white">Follow these steps</h3>
    </div>
    <!-- <h3 class="mb-4"></h3> -->
    <div class="container">
      <div class="row underCard">
        <div v-for="(item, index) in resume" :key="index" class="col-md-6 col-lg-3 mb-4">
          <img :src="item.image" class="card-img-top pb-3" alt="Crystal NFT">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title font-weight-bold text-black">{{ item.Header }}</h5>
              <p class="card-text text-black">{{ item.instruction }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesComponent',
  data () {
    return {
      resume: [{
        Header: '1. Login',
        instruction: 'Login here to be able to view our NFTs',
        image: 'https://i.postimg.cc/RC1rMHD9/profile-picture.png'
      },
      {
        Header: '2. View MarketPlace',
        instruction: 'Browse through all our NFTs',
        image: 'https://i.postimg.cc/qqT9sJg9/effect.png'
      },
      {
        Header: '3. Add NFT',
        instruction: 'Add to your Collection',
        image: 'https://i.postimg.cc/N0RGrqqS/shopping-cart-1.png'
      },
      {
        Header: '4. Checkout',
        instruction: 'Proceed to checkout',
        image: 'https://i.postimg.cc/cHYptg1R/checkout.png'
      }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

section {
  /* background: linear-gradient(to top, #4b0082, #000000); */
  /* height: 100vh; */
  background-color: black;
}
.card {
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.card:hover {
 box-shadow: 0px 0px 30px 1px purple;
}

.underCard{
  padding-bottom: 150px;
}
.card-img-top {
  width: 13rem;
}

h3 {
  font-family: 'Fjalla One', sans-serif;
  color: white;
  padding-top: 50px;
  padding-bottom: 80px;
  text-decoration-line: underline;
}
.card-title {
  font-size: 1.2rem;
  font-family: 'Fjalla One', sans-serif;
}
.card-text {
  font-size: 1rem;
  font-family: 'Fjalla One', sans-serif;
}
</style>
