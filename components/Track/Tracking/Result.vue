<template>
  <div class="result_main">
    <div class="background">
      <div class="background_text">
        <vue-typer :text="backgroundTextsBegin" :repeat="0"></vue-typer>
      </div>
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundTextsBegin: [
        "Отсканируйте камерой смартфона QR-code на бланке заказа...",
        "Или просто введите номер Вашего заказа...",
      ],
    };
  },
};
</script>

<style scoped>
.result_main {
  margin-top: 30px;
}

.icon {
  margin: 0 auto;
  height: 100px;
  width: 100px;
  background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/track/archive.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.background_text {
  text-align: center;
  margin: 0 0 30px 0;
  font-size: 18px;
}
</style>