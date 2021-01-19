<template>
  <section-block title="Сервис для наших клиентов" marginBottom="">
    <div class="sides">
      <div class="left_side">
        <div class="regular_text">
          {{ text }}
        </div>
      </div>
      <div class="right_side">
        <div class="right_side_pic"></div>
      </div>
    </div>
  </section-block>
</template>

<script>
import SectionBlock from "../../Common/SectionBlock";
export default {
  components: { SectionBlock },
  data() {
    return {
      text:
        "Мы стараемся активно развивать себя со стороны электронной коммерции, предоставляя нашим клиентам экстремально удобные цифровые сервисы для взаимодействия",
    };
  },
};
</script>

<style scoped>
.sides {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.left_side {
  width: 60%;
  display: flex;
  align-items: center;
}
.right_side {
  width: 40%;
}

.regular_text {
  font-size: 20px;
  text-align: left;
  padding-right: 10px;
}

.right_side_pic {
  background-image: url("https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/promo/about-project/FirstBlockIcon.svg");
  height: 300px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center center;
}
</style>