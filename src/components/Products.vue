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

<!--    <div class="row">-->
<!--      <div class="col-md-3" v-for="product in products" :key="product.id">-->
<!--        <div class="card">-->
<!--          <img v-bind:src= "product.image" :alt="product.name" class="card-img-top" height="150" width="150">-->
<!--          <div class="card-body">-->
<!--            <h4 class="card-title">{{ product.name }}</h4>-->
<!--            <div class="card-text">${{ product.price }}</div>-->
<!--            <div class="row justify-content-end">-->
<!--              <button class="btn btn-primary">Add to cart</button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
// import axios from 'axios'
import Item from './Item.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  name: 'Products',
  // data () {
  //   return {
  //     products: [],
  //     errors: []
  //   }
  // },
  computed: {
    products () { return this.$store.getters.products },
    inCart () { return this.$store.getters.inCart }
  },
  components: {
    Item,
    ShoppingCart
  }
  // created () {
  //   axios.get('http://localhost:3000/api/v1/products')
  //     .then(response => {
  //       this.products = response.data['products']
  //     })
  //     .catch(e => {
  //       this.error.push(e)
  //     })
  // }
}
</script>
