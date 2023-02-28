<template>
  <section class="container-fluid py5" id="Services">
 <div class="position-relative d-flex align-items-center justify-content-center">
          <h2 class="display-2 text-uppercase text-black">Our Services</h2>
        </div>
        <h3 class="mb-4">Follow these steps</h3>
        <div class="container1">
        <div v-for="item in resume" :key="item" class="row2 align-items-center">
          <div class="col-lg">
            <div class="boarder-left border-black pt-2 pl-4 ml-2">
              <div class="position-relative ex-me mb-4">
                <h5 class="font-width-bold mb-1">{{ item.Header }}</h5>
                <p>{{ item.instruction }}</p>
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
        Header: '1. Register',
        instruction: 'Register Here to be able to view our NFT'
      },

      {
        Header: '2. Create collection',
        instruction: 'Have a collection'
      },
      {
        Header: '3. Add NFT',
        instruction: 'Add Your Collection'
      },
      {
        Header: '4. Checkout',
        instruction: 'Proceed to checkout'
      }
      ]
    }
  }
}
</script>
<style>
#services{
  background: rgb(224, 168, 225);
}
.row2{
  border:double purple;
}
</style>
