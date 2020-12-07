<template>
  <div>
    <template v-for="(product, index) in getProducts">
      <div
        :key="index"
        class="catalog_item main_block_style main_block_style-less"
      >
        <div class="product_img">
          <template v-if="product.files.images">
            <div class="img_wrapper" :style="{'background-image': `url(${product.files.images[0].cloud_link}`}"></div>
          </template>
        </div>
        <div class="product_info">
          <div class="product_title">
            <nuxt-link :to="{ path: `/catalog/product/${product.link}` }">
              <div class="title">{{ product.title }}</div>
            </nuxt-link>
            <div class="price">
              <div class="product_price">{{ product.price }}</div>
            </div>
          </div>
          <div class="product_characteristic">
            <div
              v-for="(detail, index) in product.details"
              :key="index"
              class="product_characteristic_item"
            >
              {{ detail.title }}
            </div>
          </div>
          <div class="product_info_inner">
            <div class="balance">
              <div class="balance_style">
                <div class="product_balance">{{ product.balance }}</div>
              </div>
              <!-- <hint-component :hintContent="balanceHint" iconWidthHeight="15px"/> -->
            </div>
            <addToCartBtn :productLink="product.link" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import addToCartBtn from "@/components/Cart/AddToCartBtn";

export default {
  components: {
    addToCartBtn
  },
  data() {
    return {
      balanceHint: "Сколько товара в данный момент лежит на складе",
    };
  },
  methods: {
    ...mapActions({
      fetchProducts: "catalog/fetchProducts",
    }),
  },
  watch: {
    "$route.query": "$fetch",
  },
  async fetch() {
    await this.fetchProducts();
  },
  computed: { ...mapGetters({ getProducts: "catalog/getProducts" }) },
};
</script>

<style scoped>
.product_info {
  display: grid;
  padding: 0 35px;
  width: 100%;
}

.price {
  display: flex;
  font-weight: bold;
}

.product_img {
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
}

.product_title {
  font-family: "PT Sans", "Helvetica", "Arial", sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.product_characteristic {
  color: #666;
  font-size: 15px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow: hidden;
}

.product_characteristic_item {
  margin-right: 10px;
  padding: 0 10px;
  border: 1.2px dashed #ffe373;
  /* border-radius: 7px; */
  background-color: rgb(255, 249, 195);
  /* cursor: none; */
  white-space: nowrap;
  font-size: 14px;
}

.catalog_item {
  display: flex;
}

.product_info_inner {
  display: flex;
  justify-content: space-between;
}

.balance {
  display: flex;
  align-items: center;
  color: #666;
  /* border-radius: 7px; */
}


.buy_btn {
  transition-duration: 0.3s;
  border: 1px solid #d9d9d9;
  /* border-radius: 7px; */
  padding: 0 20px;
  outline: none;
  background-color: #fff;
}

.catalog_item:hover .buy_btn {
  background-color: #fc0;
}

.title {
  cursor: pointer;
  transition-duration: 0.5s;
}

.title:hover {
  color: rgb(155, 101, 1) !important;
}

.buy_btn:hover {
  background-color: #ffe373 !important;
}

@media (max-width: 990px) {
  .product_characteristic {
    font-size: 12px;
  }

  .product_info_inner {
    padding-top: 10px;
  }
}
</style>