<template>
    <div class="page">
      <Header />
      <div class="content">
        <div class="container">
          <CatalogStructure />
        </div>
        <transition name="component-fade" mode="out-in">
          <Nuxt />
        </transition>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
    <!-- <notifications group="notifications" position="bottom right" :max="4" /> -->
    <!-- <simplert :useRadius="false" /> -->
</template>

<script>
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CatalogStructure from "../components/CatalogStructure/CatalogStructure";
import { mapActions, mapMutations } from 'vuex';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // CatalogStructure
  },
  computed: {},
  methods: {
    ...mapActions(['cart/fetchCart']),
    ...mapMutations(['cart/updateCartUUID'])
  },
  async created() {
    // this.updateCartUUID({cart_uuid: localStorage.cart_uuid});
    await this.fetchCart;
  }
};
</script>

<style>

/* CUSTOM CLASS FOR SIMPLERT */
.simplert{
  z-index: 10000 !important;
}

.disabled{
    pointer-events: none;
    opacity: 0.4;
}

/* slider settings */
.slider:hover .slider-btn {
  opacity: 1;
}

.slider-btn {
  opacity: 0;
  transition: 0.5s !important;
}

.slider-btn-right {
  background: none;
}

.img_wrapper {
  display: flex;
  position: relative;
  height: 100%;
}

.img_wrapper img {
  width: 100%;
  height: 100%;
  visibility: hidden;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  color: inherit;
}

.footer {
  margin-top: auto;
}

body {
  font-family: "Arial", "PT Sans", "Helvetica", "Arial", sans-serif;
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin: 0;
  background-color: #f6f6f6;
  overflow-y: scroll;
}
.page {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
hr {
  display: block;
  width: 100%;
  height: 1px;
  margin: 40px 0;
  border: 0;
  background-color: #e5e5e5;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

/* ANIMATION */

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Container */

.container {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
}

.text_content {
  width: 100%;
  overflow-wrap: break-word;
}

.main_block_style {
  /* border-radius: 7px; */
  background-color: #fff;
  margin: 25px 0;
  padding: 25px;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}

.main_block_style-less {
  margin: 15px 0;
  padding: 15px;
}

.main_block_style-right_margin {
  margin-right: 15px;
}

.global_shadow{
  -webkit-box-shadow: 0px 0px 0px 3000px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 0px 3000px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 0px 3000px rgba(0, 0, 0, 0.38);
}

.non-select {
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

/* scroll */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f7efef;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #a5a2a2;
  border-radius: 5px;
}

.main_title {
  text-align: left;
  padding-top: 30px;
  font-size: 25px;
  color: #666;
  margin: 0 auto 10px auto;
}

.main_little_title {
  color: #000;
  font-weight: bold;
  font-size: 18px;
  margin-left: 15px;
  /* text-transform: uppercase; */
}

.main_subtitle {
  text-align: left;
  padding-top: 10px;
  font-size: 17px;
  color: #666;
  margin: 0 auto 10px auto;
}

/* GET BACK BUTTON */
/* GET BACK BUTTON */

.get_back_block {
  display: flex;
  color: #999;
  flex: 1;
  transition-duration: 0.5s;
}

.get_back_block_inner {
  padding: 15px 0 0 35px;
  position: relative;
}

.get_back_block_inner::after {
  opacity: 0;
  position: absolute;
  display: block;
  content: "";
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  width: 8px;
  height: 8px;
  top: 24px;
  right: 45px;
  z-index: 1000;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

.get_back_block:hover {
  display: flex;
  color: #666;
  flex: 1;
  background-color: #ebe4e4;
}

.get_back_block:hover .get_back_block_inner::after {
  transform: rotate(-135deg);
  opacity: 1;
}

.right_side_block {
  flex: 1;
}

.extra_container {
  display: flex;
}

/* GET BACK BUTTON END */

.section{
  margin-top: 25px;
}

</style>
