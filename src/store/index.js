import { createStore } from 'vuex'
import axios from 'axios'
const bStoreURL = 'https://digitaldawn.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: true,
    message: null,
    filteredProducts: null
  },
  getters: {
  },
  mutations: {
    setUsers (state, values) {
      state.users = values
    },
    setUser (state, values) {
      state.user = values
    },
    setProducts (state, values) {
      state.products = values
    },
    setProduct (state, values) {
      state.product = values
    },
    setSpinner (state, value) {
      state.spinner = value
    },
    setMessage (state, values) {
      state.message = values
    },
    setFilteredProducts (state, values) {
      state.filteredProducts = values
    }
  },
  actions: {
    async login (context, payload) {
      const res = await axios.post(`${bStoreURL}login`, payload)
      const { result, err } = await res.data
      if (result) {
        context.commit('setUser', result)
      } else {
        context.commit('setMessage', err)
      }
    },
    async searchProducts (context, keyword) {
      const res = await axios.get(`${bStoreURL}products`)
      const { results } = await res.data
      if (results) {
        const filtered = results.filter(p => p.prodName.toLowerCase().includes(keyword.toLowerCase()))
        context.commit('setFilteredProducts', filtered)
      } else {
        context.commit('setMessage', 'No products found')
      }
    },
    async filterProducts (context, category) {
      const res = await axios.get(`${bStoreURL}products`)
      const { results } = await res.data
      if (results) {
        const filtered = results.filter(p => p.category === category)
        context.commit('setFilteredProducts', filtered)
      } else {
        context.commit('setMessage', 'No products found')
      }
    },
    async registration (context, payload) {
      const res = await axios.post(`${bStoreURL}registration`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setUser', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async showUser (context) {
      const res = await axios.get(`${bStoreURL}users`)
      const { results } = await res.data
      if (results) {
        context.commit('setUser', results)
      }
    },
    async deleteUser (context, payload) {
      const res = await axios.delete(`${bStoreURL}deleteUser`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setUser', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateUser (context, payload) {
      const res = await axios.put(`${bStoreURL}updateUser`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setUser', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async addProduct (context, payload) {
      const res = await axios.post(`${bStoreURL}addProduct`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setProduct', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async deleteProduct (context, payload) {
      const res = await axios.delete(`${bStoreURL}deleteProduct`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async showProducts (context) {
      const res = await axios.get(`${bStoreURL}products`)
      const { results } = await res.data
      if (results) {
        context.commit('setProducts', results)
      }
      // else {
      //   context.commit('setSpinner', err)
      // }
    }

  },
  modules: {
  }
})
