<template>
  <div class="container">
    <div class="main_title">О проекте</div>
    <div class="about_proj main_block_style">
      <FirstBlock />
      <AllServices />
    </div>
  </div>
</template>

<script>
import FirstBlock from "@/components/Promo/PromoPages/AboutProject/FirstBlock";
import AllServices from "@/components/Promo/PromoPages/AboutProject/AllServices";
export default {
  name: "aboutProject",
  mounted(){
    window.scrollTo(0, 0);
  }
};
</script>

<style>
</style>