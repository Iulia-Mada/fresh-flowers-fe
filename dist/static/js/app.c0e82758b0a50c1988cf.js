webpackJsonp([1],{JcxF:function(t,r){},KGUW:function(t,r){},NHnr:function(t,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=s("7+uW"),n={render:function(){var t=this.$createElement,r=this._self._c||t;return r("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),r("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[this._v("Products")]),this._v(" "),r("a",{staticClass:"nav-link",attrs:{href:"/orders"}},[this._v("Orders")])])}]};var a=s("VU/8")({name:"App"},n,!1,function(t){s("KGUW")},null,null).exports,i=s("/ocq"),o={render:function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:t.image,alt:t.name}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.name))]),t._v(" "),s("div",{staticClass:"card-text"},[t._v("$"+t._s(t.price))]),t._v(" "),s("div",{staticClass:"row justify-content-end"},[s("button",{staticClass:"btn btn-primary",on:{click:function(r){return t.addToCart(t.id)}}},[t._v("Add to cart")])])])])])},staticRenderFns:[]},c=s("VU/8")({name:"item",props:["id","name","image","price"],methods:{addToCart:function(t){this.$store.dispatch("addToCart",t)}}},o,!1,null,null,null).exports,u=s("mtWM"),d=s.n(u),l={name:"shoppingCart",data:function(){return{email:"test@gmail.com",message:"We have just received your order. Thank you!",savingSuccessful:!1}},computed:{inCart:function(){return this.$store.getters.inCart},numInCart:function(){return this.inCart.length},cart:function(){var t=this;return this.$store.getters.inCart.map(function(r){return t.$store.getters.products.find(function(t){return r===t.id})})},total:function(){return this.cart.reduce(function(t,r){return t+r.price},0)}},methods:{removeFromCart:function(t){this.$store.dispatch("removeFromCart",t)},clearCart:function(){this.$store.dispatch("clearCart")},get_quantity:function(){var t=[];return this.inCart.forEach(function(r){var s=t.findIndex(function(t){return t.id===r});-1!==s?t[s].quantity+=1:t.push({id:r,quantity:1})}),t},createOrder:function(){var t=this;d.a.post("https://afternoon-caverns-58760.herokuapp.com/api/v1/orders",{order:{email:this.email,products:this.get_quantity()}}).then(function(r){console.log(r),t.savingSuccessful=!0,t.clearCart()}).catch(function(t){console.log(t)})},removeMessage:function(){this.savingSuccessful=!1}}},v={render:function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[s("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#shoppingCart"}},[t._v("Cart ("+t._s(t.numInCart)+")")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"shoppingCart"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[t.savingSuccessful?s("div",{staticClass:"success"},[t._v("\n             "+t._s(this.message)+"\n          ")]):t._e(),t._v(" "),s("table",{staticClass:"table"},[s("tbody",[t._l(t.cart,function(r,e){return s("tr",{key:r.id},[s("td",[t._v(t._s(r.name))]),t._v(" "),s("td",[t._v("$"+t._s(r.price))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(r){return t.removeFromCart(e)}}},[t._v("×")])])])}),t._v(" "),s("tr",[s("th"),t._v(" "),s("th",[t._v("$"+t._s(t.total))]),t._v(" "),s("th")])],2)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"},on:{click:function(r){return t.removeMessage()}}},[t._v("Keep shopping")]),t._v(" "),s("button",{staticClass:"btn btn-primary",on:{click:function(r){return t.createOrder()}}},[t._v("Check out")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[this._v("Shopping cart")]),this._v(" "),r("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[this._v("\n            ×\n          ")])])}]};var m={name:"Products",computed:{products:function(){return this.$store.getters.products},inCart:function(){return this.$store.getters.inCart}},mounted:function(){this.$store.dispatch("getProducts")},components:{Item:c,ShoppingCart:s("VU/8")(l,v,!1,function(t){s("W/7l")},"data-v-e82bb8f4",null).exports}},_={render:function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"container my-5",attrs:{id:"products"}},[r("div",{staticClass:"row mb-3"},[this._m(0),this._v(" "),r("div",{staticClass:"col-md-3"},[r("ShoppingCart")],1)]),this._v(" "),r("div",{staticClass:"row"},this._l(this.products,function(t){return r("Item",{key:t.id,attrs:{id:t.id,name:t.name,image:t.image,price:t.price}})}),1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"col-md-9"},[r("h1",[this._v("Rare flowers")])])}]},h=s("VU/8")(m,_,!1,null,null,null).exports,p={render:function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"container my-5",attrs:{id:"products"}},[s("table",[t._m(0),t._v(" "),t._l(t.orders,function(r,e){return s("tr",{key:e},[s("td",[t._v(t._s(e))]),t._v(" "),s("td",[t._v(t._s(r.email))]),t._v(" "),s("td",[t._v(t._s(r.status))]),t._v(" "),s("td",[t._v("$ "+t._s(r.total_price))])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("tr",[r("th",[this._v("Orders")]),this._v(" "),r("th",[this._v("User email")]),this._v(" "),r("th",[this._v("Status")]),this._v(" "),r("th",[this._v("Total price")])])}]};var f=s("VU/8")({name:"Orders",computed:{orders:function(){return this.$store.getters.orders}},mounted:function(){this.$store.dispatch("getOrders")}},p,!1,function(t){s("JcxF")},"data-v-533aea24",null).exports;e.a.use(i.a);var C=new i.a({mode:"history",routes:[{path:"/",name:"Products",component:h},{path:"/orders",name:"Orders",component:f}]}),g=s("NYxO");e.a.use(g.a);var b=new g.a.Store({state:{products:[],inCart:[],orders:[]},getters:{products:function(t){return t.products},inCart:function(t){return t.inCart},orders:function(t){return t.orders}},mutations:{ADD_TO_CART:function(t,r){t.inCart.push(r)},REMOVE_FROM_CART:function(t,r){t.inCart.splice(r,1)},CLEAR_CART:function(t){t.inCart=[]},SET_PRODUCTS:function(t,r){t.products=r},SET_ORDERS:function(t,r){t.orders=r}},actions:{addToCart:function(t,r){t.commit("ADD_TO_CART",r)},removeFromCart:function(t,r){t.commit("REMOVE_FROM_CART",r)},clearCart:function(t){t.commit("CLEAR_CART")},getProducts:function(t){var r=t.commit;d.a.get("https://afternoon-caverns-58760.herokuapp.com/api/v1/products").then(function(t){r("SET_PRODUCTS",t.data.products)})},getOrders:function(t){var r=t.commit;d.a.get("https://afternoon-caverns-58760.herokuapp.com/api/v1/orders").then(function(t){r("SET_ORDERS",t.data.orders)})}}});s("K3J8"),s("qb6w");new e.a({el:"#app",router:C,store:b,components:{App:a},template:"<App/>"})},"W/7l":function(t,r){},qb6w:function(t,r){}},["NHnr"]);
//# sourceMappingURL=app.c0e82758b0a50c1988cf.js.map