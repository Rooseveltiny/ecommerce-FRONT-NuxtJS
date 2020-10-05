<template>
  <div class="catalog_main">
    <H1 class="seo_display">Металлическая кровля по минимальным ценам в городе Череповец</H1>
    <div class="container">
      <div class="catalog_inner">
        <!-- <div class="navigation main_block_style main_block_style-less" style="margin-bottom: 0"> -->
        <!-- <NavigationChain /> -->
        <!-- </div> -->
        <div class="filter_items_pagination">
          <div
            class="filter main_block_style-right_margin main_block_style main_block_style-less"
          >
            <CatalogFilter />
          </div>
          <div class="sorting_and_items">
            <div class="sorting main_block_style main_block_style-less">
              <CatalogSorting />
            </div>
            <template v-show="getProducts.length">
              <div class="catalog_items">
                <div v-show="!catalogLoadingBlock" class="loading_block">
                  <div class="loading">
                    <img
                      width="100px"
                      height="100px"
                      :src="require('@/assets/logo/loadingBlock.gif')"
                      alt
                    />
                  </div>
                </div>
                <CatalogItems v-show="catalogLoadingBlock" />
              </div>

              <div
                v-show="getProducts.length"
                class="pagination main_block_style main_block_style-less"
              >
                <CatalogPagination />
              </div>
            </template>
            <div v-show="!getProducts.length" class="main_block_style">
              <b>По вышему запросу ничего не найдено :(</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItems from "@/components/Catalog/CatalogItems";
import CatalogPagination from "@/components/Catalog/CatalogPagination";
import CatalogSorting from "@/components/Catalog/CatalogSorting";
import CatalogFilter from "@/components/Catalog/CatalogFilter";
// import NavigationChain from "@/components/Generals/NavigationChain";

import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `Профнастил, металлочерепица в Череповце. Покупайте со скидкой в интернет-магазине Всё для кровли`,
      meta: [
        {
          name: "description",
          hid: "description",
          content: `
          Покупайте профнастил, металлический сайдинг от компании производителя Всё для кровли.
          Приобретайте в интернет-магазине Всё для кровли по минимальной цене.
          `,
        },
      ],
    };
  },
  methods:{},
  computed: {
    ...mapGetters({
      catalogLoadingBlock: "catalog/catalogLoadingBlock",
      getProducts: "catalog/getProducts",
      currentCategory: "catalog/getCurrentCategory"
    }),
  },
};
</script>

<style scoped>
/* Navigation */
.navigation {
  width: 100%;
}

/* Filter Sorting and Pagination */
.filter_items_pagination {
  display: flex;
}

.filter {
  width: 25%;
  height: 0%;
}

.sorting_and_items {
  width: 75%;
}

.pagination {
  margin: 0 auto;
  padding: 10px 15px;
}

.catalog_main {
  padding-bottom: 50px;
}

.loading_block {
  text-align: center;
  padding-top: 40px;
}

@media (max-width: 770px) {
  .filter_items_pagination {
    flex-wrap: wrap;
  }
  .filter {
    width: 100%;
    margin-bottom: 0;
    margin-right: 0;
  }

  .sorting_and_items {
    width: 100%;
  }
}
</style>