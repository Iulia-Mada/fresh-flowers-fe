<template>
  <div id="products" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>Rare flowers</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
    <div class="row">
      <Item
        v-for="item in products"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Item from './Item.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  name: 'Products',
  computed: {
    products () { return this.$store.getters.products },
    inCart () { return this.$store.getters.inCart }
  },
  mounted () {
    this.$store.dispatch('getProducts')
  },
  components: {
    Item,
    ShoppingCart
  }
}
</script>
