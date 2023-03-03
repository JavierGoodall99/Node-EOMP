<template>
  <div class="container-fluid">
    <h2>MARKETPLACE</h2>
  </div>
  <div class="wrapper">
    <div id="search-container">
      <div class="col-lg-5 m-auto text-center">
        <div class="buttons">
          <button
            :class="{ active: activeFilter === 'all' }"
            @click="filterProducts('all')"
          >
            All
          </button>
          <button
            :class="{ active: activeFilter === 'Abstract' }"
            @click="filterProducts('Abstract')"
          >
            ABSTRACT
          </button>
          <button
            :class="{ active: activeFilter === 'Animation' }"
            @click="filterProducts('Animation')"
          >
            ANIMATION
          </button>
          <button
            :class="{ active: activeFilter === 'Crystals' }"
            @click="filterProducts('Crystals')"
          >
            CRYSTAL
          </button>
          <button
            :class="{ active: activeFilter === 'Sunset' }"
            @click="filterProducts('Sunset')"
          >
            SUNSET
          </button>
        </div>
      </div>
    </div>

    <div class="card" v-for="prod in filteredProducts" :key="prod.id" style="width: 18rem">
      <img :src="prod.imgURL" class="card-img-top" :alt="prod.name" />
      <div class="card-body">
        <p class="card-text">{{ prod.prodName }}</p>
        <br />
        <p class="card-text">{{ prod.prodDescription }}</p>
        <p class="card-text">{{ prod.category }}</p>
        <h5 class="card-text">R{{ prod.prodPrice }}</h5>
        <button @click="viewProduct(prod)">View Product</button>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    store.dispatch('showProducts')
    const products = computed(() => store.state.products)
    const activeFilter = ref('all')
    const selectedProduct = ref(null)
    const showProduct = ref(false)
    const filteredProducts = computed(() => {
      if (activeFilter.value === 'all') {
        return products.value
      } else {
        return products.value.filter(
          (product) => product.category === activeFilter.value
        )
      }
    })

    const filterProducts = (category) => {
      activeFilter.value = category
    }

    const viewProduct = (product) => {
      selectedProduct.value = product
      showProduct.value = true
    }

    return {
      products,
      filteredProducts,
      filterProducts,
      activeFilter,
      selectedProduct,
      showProduct,
      viewProduct
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inconsolata&display=swap');

.container-fluid {
  font-family: 'Fjalla One', sans-serif;
}
.wrapper {
  width: 95%;
  margin: 0 auto;
  background: linear-gradient(to bottom, #4b0082, #000000);
}

#search-container {
  margin: 1em 0;
  padding-top: 50px;
}
#search-container input:hover {
  border-bottom-color: #4b0082;
}

.buttons button {
  padding: 1em 2.2em;
  background-color: transparent;
  border: 2px solid #fefdff;
  border-radius: 50px;
  color: #ffffff;
  cursor: pointer;
  font-size: large;
  text-align: center;
  align-items: center;
  align-self: center;
}
.buttons button:hover {
  border: none;
  background-color: #000000;
  color: white;
}
.active {
  background-color: transparent;
  color: #4b0082;
}
.card {
  margin-top: 2em;
  display: inline-flex;
  width: 18rem;
  margin: 1rem;
}

.card-img-top {
  width: 286px;
  height: 300px;
  object-fit: cover;
}
</style>
