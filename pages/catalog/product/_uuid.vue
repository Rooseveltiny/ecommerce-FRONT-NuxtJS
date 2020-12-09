<template>
    <div class="container">
    <H1 class="seo_display">{{ getH1 }}</H1>
    <template v-if="!isLoading">
      <div class="title_main">
        <div>
          <div class="title">{{ product.title }}</div>
          <div class="article">Код продукта: {{ product.product_code }}</div>
        </div>
        <div @click="$router.go(-1)" class="get_back">
          <div class="get_back_label main_block_style main_block_style-less">
            Вернуться назад
          </div>
        </div>
      </div>
      <div
        class="product main_block_style main_block_style-less"
        style="margin-bottom: 0"
      >
        <Product />
      </div>
      <div class="product_info">
        <ProductInfo />
      </div>
    </template>
    <template v-else>
      <div class="loading">
                    <img
                      width="100px"
                      height="100px"
                      :src="require('@/assets/logo/loadingBlock.gif')"
                      alt
                    />
                  </div>
    </template>
    </div>    
</template>

<script>
import ProductInfo from "@/components/Product/ProductInfo";
import Product from "@/components/Product/Product";
import { mapActions, mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `${this.product.title} в Череповце. Купить в интернет-магазине Всё для кровли`,
      meta: [
        {
          name: "description",
          hid: "description",
          content: `
          Заказывайте ${this.product.title} от компании производителя Всё для кровли.
          Приобретайте ${this.product.category_title} в интернет-магазине с доставкой и гарантией.
          `,
        },
      ],
    };
  },
  computed: {
    getH1() {return `${this.product.title} ${this.product.details_in_row}`},
    ...mapGetters({ product: "product/product",
    isLoading: "product/loadingStatus"            
    }),
  },
  methods: {
    ...mapActions({ fetchProduct: "product/fetchProduct" }),
  },
  async fetch() {
    await this.fetchProduct();
  },
};
</script>

<style scoped>
.title {
  font-size: 25px;
  color: #666;
}

.title_main {
  display: flex;
  justify-content: space-between;
  color: #666;
  padding: 15px 0 0 15px;
}

.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30rem;
}

.get_back {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: relative;
  border: 1px solid rgb(194, 194, 194);
  /* border-radius: 3px; */
  padding: 10px 20px;
  transition-duration: 0.5s;
  width: 50px;
}
.get_back:hover {
  background-color: #ffe373;
}
.get_back::after,
.get_back::before {
  position: absolute;
  content: "";
  background-color: #666;
  width: 2px;
  height: 25px;
}
.get_back::before {
  transform: rotate(45deg);
}
.get_back::after {
  transform: rotate(-45deg);
}
.get_back:hover .get_back_label {
  opacity: 1;
  visibility: visible;
  transform: translateX(35px);
}
.get_back_label {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  font-size: 14px;
  display: flex;
  width: 140px;
  right: 110px;
  padding: 5px 10px;
  transition-duration: 1s;
}
.get_back_label::after {
  display: block;
  content: "";
  position: absolute;
  height: 22px;
  width: 22px;
  background-color: #fff;
  top: 5px;
  right: -7px;
  transform: rotate(45deg);
  box-shadow: 2px -2px 5px 0px rgba(0, 0, 0, 0.07);
}


</style>