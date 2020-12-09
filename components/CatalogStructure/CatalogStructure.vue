<template>
  <transition name="component-fade" mode="out-in">
    <div class="container">
    <div
      v-if="getCatalogStructureVision"
      id="MainCatalogStructure"
      class="container main_catalog_structure global_shadow main_block_style main_block_style-less"
    >
      <div
        id="CatalogCategories"
        class="catalog_categories"
        :class="{ mb_categories_active: openedSubCategoriesOnMobiles }"
      >
        <div class="catalog_category_item">
          <div @click="closeCatalogStructureDetaily()" class="close_catalog">
            Закрыть
          </div>
        </div>
        <template v-for="(cat, index) in getCategories">
          <div
            :key="index"
            class="catalog_category_item"
            @click="
              changeCurrentCategory(cat);
              openCloseSubCategoriesOnMobiles();
            "
            :class="{ active: cat == getCurrentCategory }"
          >
            <div class="catalog_category_icon">
              <img :src="cat.icon" width="20px" alt />
            </div>
            <div class="catalog_category_title">{{ cat.title }}</div>
          </div>
        </template>
      </div>
      <div
        id="CatalogSubCategories"
        class="catalog_sub_categories"
        :class="{ mb_sub_categories_active: openedSubCategoriesOnMobiles }"
      >
        <div class="sub_categories_btn_back">
          <div
            class="close_catalog"
            v-if="openedSubCategoriesOnMobiles"
            @click="openCloseSubCategoriesOnMobiles"
          >
            Назад
          </div>
        </div>

        <div class="category_title">{{ getCurrentCategory.title }}</div>
        <div class="catalog_sub_categories_inner">
          <template v-for="(sub_cat, index) in getCurrentCategory.kids">
            <div :key="index" class="catalog_sub_category">
              <div class="catalog_sub_category_title">{{ sub_cat.title }}</div>
              <template v-for="(sub_cat_item, index) in sub_cat.kids">
                <div :key="index" class="sub_cat_item">
                  <router-link :to="`/products/category/${sub_cat_item.slug}`">
                    <span
                      @click="
                        clearFilterParams();
                        closeCatalogStructureDetaily();
                      "
                      >{{ sub_cat_item.title }}</span
                    >
                  </router-link>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div class="category_picture" >
        <div class="cat_image" :style="{'background-image': `url(${getCurrentCategory.cat_pic})`}">
          <!-- <img width="90%" :src="getCurrentCategory.cat_pic" alt="" /> -->
        </div>
      </div>
    </div>
        
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      openedSubCategoriesOnMobiles: false,
    };
  },
  computed: {
    ...mapGetters({
      getCategories: "catalog/getCategories",
      getCurrentCategory: "catalog/getCurrentCategory",
      getCatalogStructureVision: "catalog/getCatalogStructureVision",
    }),
  },
  methods: {
    ...mapActions({ fetchCatalogStructure: "catalog/fetchCatalogStructure" }),
    ...mapMutations({
      changeCurrentPage: "generals/changeCurrentPage",
      clearFilterParams: "catalog/clearFilterParams",
      changeCurrentCategory: "catalog/changeCurrentCategory",
      closeCatalogStructure: "catalog/closeCatalogStructure",
    }),
    openCloseSubCategoriesOnMobiles() {
      this.openedSubCategoriesOnMobiles = !this.openedSubCategoriesOnMobiles;
    },
    closeCatalogStructureDetaily() {
      this.closeCatalogStructure();
      this.openedSubCategoriesOnMobiles = false;
    },
  },
  async mounted() {
    await this.fetchCatalogStructure();
  },
  created() {
    document.addEventListener("click", (event) => {
      if (this.getCatalogStructureVision) {
        if (event.srcElement.id !== "CatalogStructure") {
          for (let element of event.path) {
            if (element.id === "MainCatalogStructure") {
              return;
            }
          }
          this.closeCatalogStructure();
        }
      }
    });
  },
};
</script>

<style scoped>

.container{
  position: absolute;
}

/* CATEGORIES */

.close_catalog {
  background-color: #fc0;
  padding: 5px 10px;
  display: none;
}

.sub_categories_btn {
  padding-left: 0;
  margin-left: 10px;
}

.main_catalog_structure {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1400;
  display: flex;
  max-width: 1070px;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

.catalog_categories {
  width: 30%;
  border-right: 1px solid rgb(231, 231, 231);
}

.catalog_category_item {
  position: relative;
  margin: 4px 15px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
}

.catalog_category_item:first-child {
  display: none;
}

.catalog_category_item:first-child:after {
  display: none;
}

.catalog_category_item:hover {
  background-color: rgb(245, 245, 245);
}

.catalog_category_item.active {
  background-color: rgb(245, 245, 245);
}

.catalog_category_icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
  height: 25px;
  width: 25px;
}

/* SUB CATEGORIES */

.catalog_sub_category {
  width: 50%;
  padding-top: 20px;
}

.catalog_sub_category_title {
  padding: 0 5px;
}

.catalog_category_item:after {
  position: absolute;
  content: "";
  border-right: 2px solid rgb(200, 200, 200);
  border-top: 2px solid rgb(200, 200, 200);
  right: 15px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.catalog_sub_categories {
  margin-left: 15px;
  width: 50%;
}

.catalog_sub_categories_inner {
  display: flex;
  flex-wrap: wrap;
}

.category_title {
  font-weight: 600;
  font-size: 19px;
  color: #666;
  /* padding-bottom: 20px; */
}

.catalog_sub_category_title {
  font-weight: bold;
}

.sub_cat_item {
  color: #666;
  padding: 0 5px;
  transition-duration: 0.5s;
}

.sub_cat_item:hover {
  color: red;
}

/* CATEGORY PICTURE */
.category_picture {
  width: 20%;
  display: flex;
  align-items: center;
}

.cat_image {
  display: flex;
  align-items: center;
  height: 50%;
  width: 100%;
  margin-right: 25px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}

/* making catalog structure for mobiles */
@media (max-width: 575px) {
  .main_catalog_structure {
    padding: 0;
    margin: 0;
  }

  .category_picture {
    display: none;
  }

  .catalog_sub_categories {
    display: none;
  }

  .catalog_categories {
    width: 100%;
  }

  .catalog_category_item {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .catalog_category_item:first-child {
    display: block;
  }

  .catalog_category_item.active {
    background: none;
  }

  .main_catalog_structure {
    top: -115px;
  }

  .close_catalog {
    display: inline-block;
  }

  .mb_sub_categories_active {
    display: block;
  }

  .mb_categories_active {
    display: none;
  }

  .category_title {
    display: none;
  }

  .catalog_sub_category_title {
    padding: 5px 15px;
  }

  .sub_cat_item {
    padding: 3px 15px;
  }

  .sub_categories_btn_back {
    padding: 15px 10px 15px 0;
    margin-left: 15px;
  }

  .catalog_sub_categories {
    width: 100%;
  }

  .catalog_sub_categories_inner {
    padding-bottom: 20px;
    width: 100%;
  }

  .catalog_sub_category {
    display: inline-block;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 10px;
  }
}
</style>

