<template>
  <div class="main_header non-select">
    <header class="header">
      <div class="container">
        <div class="inner_header">
          <nav class="nav">
            <div class="nav_inner">
              <div class="nav-left-part">
                <span class="nav_link">Череповец</span>
                <span class="nav_link">8(8202)265-265</span>
                <router-link to="/contacts">
                  <span class="nav_link">Контакты</span>
                </router-link>
                <router-link to="/feedback">
                  <span class="nav_link">Обратная связь</span>
                </router-link>
              </div>
              <div class="nav-right-part">Вход/Регистрация</div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="bottom_header">
      <div class="container">
        <div class="bottom_header_inner">
          <div class="bottom_header_left">
            <router-link to="/">
              <div class="logo">
                <img height="40px" :src="require('../../assets/logo/logo.svg')" alt />
              </div>
            </router-link>

            <transition name="bounce">
              <div class="catalog">
                <div
                  @click="showCatalogStructureComponentMethod()"
                  class="catalog_inner non-select"
                  :class="{active: getCatalogStructureVision}"
                  id="CatalogStructure"
                >Каталог продукции</div>
              </div>
            </transition>
          </div>
          <div class="bottom_header_right">
            <client-only>
            <Search />
            </client-only>
            <router-link to="cart">
            <div
              class="cart_icon"
              :class="{'cart_icon-empty': !getCartProducts.length, 'cart_icon-full': getCartProducts.length}"
            >
            <span class="cart_quantity" :class="{'cart_quantity-not_null': getCartProducts.length}">{{getCartProducts.length}}</span>
            </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Search from '../Generals/Search'


export default {
  components: {
    Search,
  },
  methods: {
    ...mapMutations({openCloseCatalogStructureGeneral :'catalog/openCloseCatalogStructureGeneral'}),
    showCatalogStructureComponentMethod: function () {
      this.openCloseCatalogStructureGeneral();
    },
  },
  computed: {
    ...mapGetters({getCatalogStructureVision: "catalog/getCatalogStructureVision", getCartProducts: "cart/getCartProducts"}),
  },
};
</script>

<style scoped>
.header {
  background-color: #fc0;
}

/* NAV */

.nav_link {
  cursor: pointer;
  margin-right: 30px;
}

.nav_inner {
  padding: 3px 0 3px 0;
  display: flex;
  justify-content: space-between;
}

.nav-left-part {
  min-width: 35%;
  display: flex;
  justify-content: space-around;
}

.nav-right-part {
  width: 30%;
  text-align: right;
}

/* BOTTOM HEADER */
.bottom_header {
  -webkit-box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.25);
  background-color: #fff;
}

.bottom_header_inner {
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.bottom_header_left {
  display: flex;
}

.catalog {
  z-index: 1450;
  display: flex;
  align-items: center;
  margin-left: 50px;
  position: relative;
}

.catalog_inner {
  cursor: pointer;
  background-color: #fc0;
  padding: 5px 10px;
  padding-right: 37px;
  font-size: 15px;
  /* border-radius: 7px; */
  transition-duration: transform 0.5s;
}

.catalog_inner::after,
.catalog_inner::before {
  content: "";
  width: 16px;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  top: 0;
  position: absolute;
  top: 42%;
  right: 11px;
  height: 6px;
  transition: transform 0.5s;
}

.catalog_inner::before {
  top: 49%;
  border-top: none;
  border-bottom: 3px solid #333;
  height: 7px;
}

.catalog_inner.active::before,
.catalog_inner.active::after {
  width: 20px;
}

.catalog_inner.active::before {
  border-top: none;
  border-bottom: 3px solid rgb(252, 102, 102);
  transform: rotate(-45deg);
  top: 42%;
}

.catalog_inner.active::after {
  border-bottom: none;
  border-top: 3px solid rgb(252, 102, 102);
  transform: rotate(45deg);
  top: 47%;
}

.catalog_inner:hover {
  background-color: #ffe373;
}

.catalog_inner.active {
  background-color: #fff;
  border: 2px solid rgb(252, 102, 102);
  color: rgb(252, 102, 102);
}

.bottom_header_right {
  width: 45%;
  text-align: right;
  display: flex;
  align-items: center;
}

/* CART */

.cart_icon-empty {
  background: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/cart_empty.svg)
    no-repeat;
  background-size: 70%;
}
.cart_icon-full {
  background: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/cart_full.svg)
    no-repeat;
  background-size: 90%;
}

.cart_icon {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  background-position-y: center;
  transition-duration: .5s;
  position: relative;
  display: flex;
  justify-content: flex-end;
    align-items: flex-end;
}

.cart_quantity{
  position: absolute;
  font-size: 10px;
  background-color: rgb(240,240,240);
  padding: 3px;
  border-radius: 30px;
  transition-duration: .5s;
  right: -1px;
  top: 25px;
  font-weight: bold;
}

.cart_quantity-not_null{
  position: absolute;
  background-color: #fc0;
  right: -16px;
  font-size: 10px;
}

.logo {
  padding: 15px 0 10px 0;
}

@media (max-width: 990px) {
  .nav_inner {
    font-size: 13px;
  }
}

@media (max-width: 575px) {
  .nav_inner {
    font-size: 11px;
  }

  .catalog {
    z-index: 100;
  }
}
</style>