<template>
  <div class="product">
    <ProductImages :images="product.files.images" />
    <div class="product_info">
      <div class="product_info_inner">
        <div class="product_price">
          {{ product.price }}
        </div>
        <div class="characteristic"></div>
        <div class="balance">
          {{ product.balance }}
          <hint-component
            hintContent="Столько товара сейчас лежит на складе)"
            marginLeft="10px"
          />
        </div>
        <div class="characteristic"></div>
      </div>
      <div class="buy_btn_block">
        <button class="buy_btn">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductImages from "./ProductImages.vue";

export default {
  components: { ProductImages },
  methods: {},
  computed: {
    ...mapGetters({
      product: "product/product",
    }),
  },
  async fetch() {},
  watch: {},
};
</script>

<style scoped>
.product {
  display: flex;
}

.product_info {
  padding: 0 50px;
  display: grid;
}

.product_price {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #666;
}

.balance {
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buy_btn {
  background-color: #fc0;
  outline: none;
  border: none;
  /* border-radius: 7px; */
  font-size: 20px;
  width: 100%;
  height: 50px;
  transition-duration: 0.5s;
  color: #333;
}

.buy_btn:hover {
  background-color: #ffe373;
}

</style>