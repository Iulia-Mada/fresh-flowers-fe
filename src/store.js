import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    inCart: [],
    orders: []
  },
  getters: {
    products: state => state.products,
    inCart: state => state.inCart,
    orders: state => state.orders
  },
  mutations: {
    ADD_TO_CART (state, id) {
      state.inCart.push(id)
    },
    REMOVE_FROM_CART (state, index) {
      state.inCart.splice(index, 1)
    },
    CLEAR_CART (state) {
      state.inCart = []
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_ORDERS (state, orders) {
      state.orders = orders
    }
  },
  actions: {
    addToCart (context, id) { context.commit('ADD_TO_CART', id) },
    removeFromCart (context, index) { context.commit('REMOVE_FROM_CART', index) },
    clearCart (context) { context.commit('CLEAR_CART') },
    getProducts ({commit}) {
      axios.get(process.env.API_BASE_URL + '/api/v1/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data['products'])
        })
    },
    getOrders ({commit}) {
      axios.get(process.env.API_BASE_URL + '/api/v1/orders')
        .then(response => {
          commit('SET_ORDERS', response.data['orders'])
        })
    }
  }
})
