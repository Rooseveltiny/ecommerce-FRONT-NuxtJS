<template>
  <div class="about_company">
    <div class="container">
      <div class="main_title">О Компании</div>
      <div class="about_company_inner main_block_style main_block_style_less">
        <Founded />
        <ShortDescription />
        <Benefits />
        <Cooperation />
        <Catalog />
        <Feedback />
        <div class="copy_right" style="text-align: right">{{ copyRight }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Founded from "@/components/AboutCompanyComponents/Founded";
import ShortDescription from "@/components/AboutCompanyComponents/Founded";
import Benefits from "@/components/AboutCompanyComponents/Benefits";
import Cooperation from "@/components/AboutCompanyComponents/Cooperation";
import Feedback from "@/components/AboutCompanyComponents/Feedback";
import Catalog from "@/components/AboutCompanyComponents/Catalog";

export default {
  data() {
    return {
      copyRight: `ООО "ВДК-СТРОЙ" ИНН 3528272512 ${new Date().getFullYear()} год.`,
    };
  },
  async mounted() {
    window.scrollTo({ top: 0, behavior: "auto" });
  },
};
</script>

<style scoped>
.about_company {
  color: black;
}

@media (max-width: 770px) {
  .copy_right {
    margin-top: 15px;
    font-size: 12px;
  }
}
@media (max-width: 575px) {
  .copy_right {
    font-size: 9px;
  }
}
</style>