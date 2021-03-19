import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '@/components/Products'
import Orders from '@/components/Orders'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }
  ]
})
