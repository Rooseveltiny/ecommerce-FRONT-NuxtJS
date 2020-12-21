<template>
  <div class="main_block_style">
    <div class="big_title big_title-less title_center">
      Здесь Вы можете
      <span class="underline_with_main_color">отследить готовность</span> Ваших
      заказов!
    </div>
    <component :is="currentComponent" />
  </div>
</template>

<script>
import TwoWays from "./TwoWays";
import Tracking from "./Tracking/index";
import { mapGetters } from "vuex";
export default {
  components: { TwoWays, Tracking },
  computed: {
    currentComponent() {
      return this.$route.query.component;
    },
  },
};
</script>

<style scoped>
.tip {
  margin-top: 20px;
  text-align: center;
  font-size: 22px;
}

.big_title-less{
    font-size: 25px;
}

</style>