<template>
  <section-block>
    <service-block
      v-for="(item, index) in allServices"
      :key="index"
      :name="item.name"
      :description="item.description"
    />
  </section-block>
</template>

<script>
import SectionBlock from "~/components/Promo/Common/SectionBlock.vue";
import ServiceBlock from "./ServiceBlock";
export default {
  components: { SectionBlock },
  data() {
    return {
      allServices: [
        {
          name: "Отслеживание заказов",
          description: `
          Вы можете отследить готовность заказа на этой <nuxt-link to="/track?component=TwoWays">странице</nuxt-link>.
          `,
        },
        {
          name: "Электронный каталог",
          description: "",
        },
        {
          name: "Электронный документооборот",
          description: "",
        },
        {
          name: "Персональный менеджер",
          description: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>