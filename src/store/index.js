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
    message: null
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
    setSpinner (state, values) {
      state.spinner = values
    },
    setMessage (state, values) {
      state.message = values
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
    async registration (context, payload) {
      const res = await axios.post(`${bStoreURL}registration`, payload)
      const { msg, err } = await res.data
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {
  }
})
