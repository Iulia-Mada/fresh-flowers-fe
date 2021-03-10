import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
      { id: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
      { id: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
      { id: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 }
    ],
    inCart: []
  },
  getters: {
    products: state => state.products,
    inCart: state => state.inCart
  },
  mutations: {
    ADD_TO_CART (state, id) {
      state.inCart.push(id)
    },
    REMOVE_FROM_CART (state, index) {
      state.inCart.splice(index, 1)
    }
  },
  actions: {
    addToCart (context, id) { context.commit('ADD_TO_CART', id) },
    removeFromCart (context, index) { context.commit('REMOVE_FROM_CART', index) }
  }
})
