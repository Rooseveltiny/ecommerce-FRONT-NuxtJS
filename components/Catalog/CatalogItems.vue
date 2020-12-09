<template>
  <div>
    <template v-for="(product, index) in getProducts">
      <CatalogItem :key="index" :product="product" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import addToCartBtn from "@/components/Cart/AddToCartBtn";
import CatalogItem from "@/components/Catalog/CatalogItem"

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

<style scoped></style>