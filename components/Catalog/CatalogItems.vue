<template>
  <div>
    <template v-for="(product, index) in getProducts">
      <CatalogItem :key="index" :product="product" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CatalogItem from "@/components/Catalog/CatalogItem"

export default {
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