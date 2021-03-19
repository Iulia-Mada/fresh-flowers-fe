<template>
  <div id="products" class="container my-5">
    <table >
      <tr>
        <th>Orders</th>
        <th>User email</th>
        <th>Status</th>
        <th>Total price</th>
      </tr>
        <tr v-for= "(row,k) in orders" :key="k">
        <td>{{k}}</td >
        <td>{{row.email}}</td >
        <td>{{row.status}}</td >
        <td>$ {{row.total_price}}</td >
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  computed: {
    orders () { return this.$store.getters.orders }
  },
  mounted () {
    this.$store.dispatch('getOrders')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td {
    padding-right: 40px;
  }
</style>
