<template>
  <div class="mt-4">
    <table class="table align-middle">
      <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td class="w-10">
          <img :src="product.imageUrl" alt="product picture" class="img-fluid"/>
        </td>
        <td>
          {{ product.title }}
        </td>
        <td>
          <del class="h6">原價 {{ product.origin_price }} 元</del>
          <div class="h5">現在只要 {{ product.price }} 元</div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-outline-secondary" @click="openModal(product)" :disabled="product.isInfoLoading">
              <i class="fas fa-spinner fa-pulse" v-if="product.isInfoLoading"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger" @click="addProductToCart(product, 1)" :disabled="product.isCartLoading">
              <i class="fas fa-spinner fa-pulse" v-if="product.isCartLoading"></i>
              加到購物車
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <!-- 產品Modal -->
  <product-modal ref="modal"></product-modal>
  <!-- 產品Modal -->
</template>

<script>
import {mapActions, mapState} from "pinia";
import {productStore} from "../stores/productStore.js";
import ProductModal from "./ProductModal.vue";

export default {
  name: "ProductList",
  components: {ProductModal},
  methods: {
    ...mapActions(productStore, ['selectProduct', 'addProductToCart', 'getProducts']),
    openModal(product) {
      product.isInfoLoading = true;
      this.selectProduct(product);
      this.$refs.modal.openModal();
      setTimeout(() => {
        product.isInfoLoading = false;
      }, 500)
    }
  },
  async mounted() {
    await this.getProducts();
  },
  computed:{
    ...mapState(productStore, ['products'])
  }
}
</script>

<style scoped>

</style>
