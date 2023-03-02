<template>
  <div class="container-fluid">
    <h2>Checkout for the hottest NFT's</h2>
  </div>
  <div class="wrapper">
    <div id="search-container">
      <div class="col-lg-5 m-auto text-center">
        <input type="text" id="search-input" placeholder="Search products"><br><br>
        <div class="buttons">
          <button :class="{ active: activeFilter === 'all' }" @click="filterProducts('all')">All</button>
          <button :class="{ active: activeFilter === 'abstract' }" @click="filterProducts('abstract')">ABSTRACT</button>
          <button :class="{ active: activeFilter === 'animation' }" @click="filterProducts('animation')">ANIMATION</button>
          <button :class="{ active: activeFilter === 'crystal' }" @click="filterProducts('crystal')">CRYSTAL</button>
          <button :class="{ active: activeFilter === 'sunset' }" @click="filterProducts('sunset')">SUNSET</button>
        </div>
      </div>
    </div>

    <div class="card" v-for="prod in products" :key="prod.id" style="width: 18rem;">
      <img :src="prod.imgURL" class="card-img-top" :alt="prod.name">
      <div class="card-body">
        <p class="card-text">{{ prod.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    store.dispatch('showProducts')

    const products = computed(() => store.state.products)
    // const activeFilter = ref('all')

    // const filteredProducts = computed(() => {
    //   if (activeFilter.value === 'all') {
    //     return products.value
    //   } else {
    //     return products.value.filter(product => product.category === activeFilter.value)
    //   }
    // })

    // const filterProducts = (category) => {
    //   activeFilter.value = category
    // }

    return {
      products
      // filteredProducts,
      // filterProducts,
      // activeFilter
    }
  }
}
</script>

<style>
.wrapper {
  width: 95%;
  margin: 0 auto;
}

#search-container {
  margin: 1em 0;
}

#search-container input {
  background-color: transparent;
  width: 40%;
  border-bottom: 2px solid black;
  padding: 1em 0.3em;
  border-top: none;
  border-left: none;
  border-right: none;
}

#search-container input:focus {
  border: #4b0082;
}

#search-container input:hover {
  border-bottom-color: #4b0082;
}

.buttons button {
  padding: 1em 2.2em;
  background-color: transparent;
  border: 2px solid #4b0082;
  border-radius: 50px;
  color: #4b0082;
  cursor: pointer;
  font-size: large;
  text-align: center;
  align-items: center;
  align-self: center;
}

.buttons button:hover {
  border: none;
  background-color: #4b0082;
  color: white;
}

.active {
  background-color: transparent;
  color: #4b0082;
}

.card {
  margin-top: 2em;
}
</style>
