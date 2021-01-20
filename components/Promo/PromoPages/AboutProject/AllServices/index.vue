<template>
  <section-block title="Цифровая трансформация">
    <service-block
      v-for="(item, index) in allServices"
      :key="index"
      :name="item.name"
      :description="item.description"
      :icon="item.icon"
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
          Вы можете отследить готовность заказа на этой <a style="font-weight: bold" target="_blank" href="/track?component=TwoWays">странице</a>.
          Либо просто отсканируйте qr-code на бланке заказа.
          `,
          icon: "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/promo/about-project/track.svg"
        },
        {
          name: "Электронный каталог",
          description: `
            Интернет-магазин синхронизирован с учётной системой предприятия. Обеспечивается
            актуальность цен, остатков и ассортимента продукции.
          `,
          icon: "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/track/phone.svg"
        },
        {
          name: "Отлаженные бизнес-процессы",
          description: 
          `
          Благодаря информационным технологиям, мы стараемся чтобы все аспекты оперативной деятельности
          были максимально эффективными.
          `
          ,
          icon: "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/promo/dashboard.svg"
        }
      ],
    };
  },
};
</script>

<style>
</style>