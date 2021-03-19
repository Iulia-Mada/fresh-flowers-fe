<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart" >Cart ({{ numInCart }})</button>
    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="success" v-if="savingSuccessful">
               {{ this.message }}
            </div>
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in cart" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>${{ item.price }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
               <tr>
                  <th></th>
                  <th>${{ total }}</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary"  @click="removeMessage()" data-dismiss="modal">Keep shopping</button>
            <button class="btn btn-primary"  @click="createOrder()">Check out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'shoppingCart',
  data () {
    return {
      // we should ask for user email in a form
      email: 'test@gmail.com',
      message: 'We have just received your order. Thank you!',
      savingSuccessful: false
    }
  },
  computed: {
    inCart () { return this.$store.getters.inCart },
    numInCart () { return this.inCart.length },
    cart () {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.products.find((Item) => {
          return cartItem === Item.id
        })
      })
    },
    total () {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0)
    }
  },
  methods: {
    removeFromCart (index) {
      this.$store.dispatch('removeFromCart', index)
    },
    clearCart () {
      this.$store.dispatch('clearCart')
    },
    // we should add a quantity attribute on product
    get_quantity () {
      let cart = []

      this.inCart.forEach((id) => {
        let ind = cart.findIndex(v => v.id === id)
        if (ind !== -1) {
          cart[ind].quantity += 1
        } else {
          cart.push({id: id, quantity: 1})
        }
      })
      return cart
    },
    createOrder () {
      axios.post(process.env.API_BASE_URL + '/api/v1/orders', {
        order: { email: this.email, products: this.get_quantity() }
      })
        .then(response => {
          console.log(response)
          this.savingSuccessful = true
          this.clearCart()
        })
        .catch(error => {
          // we should display errors coming from api
          console.log(error)
        })
    },
    removeMessage () {
      this.savingSuccessful = false
    }
  }
}
</script>
<style scoped>

.success {
  color: #42b983;
  font-weight: bold;
}
</style>
