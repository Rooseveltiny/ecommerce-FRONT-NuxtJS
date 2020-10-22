<template>
  <div class="section_type_one">
    <div class="big_title title_center">Почему с нами круто!</div>
    <div class="benefits_inner">
      <template v-for="(item, index) in benefits">
      <div class="benefit_item" :key="index">
        <div
          class="benefit_icon"
          :style="{'background-image': `url(${item.icon})`}"
        ></div>
        <div class="benefits_title_content">
          <div class="benefit_title">{{item.title}}</div>
          <div class="benefit_content">
            {{item.content}}
          </div>
        </div>
      </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  
    data() {
      const benefits = [
        {
          icon:
            "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/benefits/clock.svg",
          title: "Быстро. Очень быстро.",
          content:
            "В строительстве важны сроки поставки материалов. Поэтому мы стремимся производить продукцию в кратчайшие сроки без ущерба качеству.",
        },
        {
          icon:
            "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/benefits/data.svg",
          title: "Сервисы. Удобство.",
          content:
            "Стараемся сделать так, чтобы нашим клиентам всегда было удобно сотрудничать с нами. Для этого создаем различные сервисы!",
        },
        {
          icon:
            "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/benefits/logistics.svg",
          title: "Доставка. По всей стране.",
          content:
            "Наши менеджеры готовы обеспечить успешную доставку продукции в любой населённый пункт России.",
        },
        {
          icon:
            "https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/benefits/calculator.svg",
          title: "Расчёт материала.",
          content:
            "Имеем богатый опыт в расчёте кровельных и фасадных материалов. Мы используем специализированное ПО для этих целей.",
        }
      ]
    return {benefits}
  },
    // data(){
    //     return {}
    // },
};
</script>

<style scoped>
.benefit_icon {
  width: 50%;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}

.benefits_inner {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.benefit_item {
  width: 50%;
  display: flex;
  margin-top: 50px;
}

.benefit_title {
  font-size: 22px;
  font-weight: bold;
}

.benefit_content {
  color: #666;
}

.benefits_title_content{
    width: 100%;
}
</style>