<template>
  <div class="page">
    <H1 class="seo_display"
      >Сайт компании Всё для кровли. ИП Трифаненков. ООО ВДК-СТРОЙ г.
      Череповец</H1
    >
    <Header />
    <div class="content">
      <div class="container">
        <client-only>
        <CatalogStructure />
        </client-only>
      </div>
      <transition name="component-fade" mode="out-in">
        <Nuxt />
      </transition>
    </div>
    <div class="footer">
      <Footer />
    </div>
    <client-only>
      <notifications group="login" position="bottom right" />
    </client-only>
  </div>
</template>

<script>
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CatalogStructure from "../components/CatalogStructure/CatalogStructure";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {},
  methods: {
    ...mapActions({setToken: 'user/setToken'})
  },
  async mounted() {
    await this.setToken();
  },
};
</script>


<style>


/* GENERAL INPUT */

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('@/general_styles/generals.css');

</style>
