<template>
  <div class="container">
    <product-list></product-list>
    <shopping-cart></shopping-cart>
    <order-form></order-form>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import OrderForm from "./components/OrderForm.vue";

export default {
  data() {
    return {}
  },
  components: {
    ProductList,
    ShoppingCart,
    OrderForm
  },
}
</script>

<style>
.w-10 {
  width: 10%;
}
</style>
