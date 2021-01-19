<template>
  <div class="service_item">
    <div class="service_inner">
      <div class="service_body">
        <div class="service_title">{{ name }}</div>
        <div class="service_description" v-html="description"></div>
      </div>
      <div
        class="service_icon"
        :style="{ 'background-image': `url(${icon})` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "<сервис>",
    },
    description: {
      type: String,
      default: "<описание>",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.service_title {
  font-size: 20px;
  font-weight: bold;
}
.service_description {
  font-size: 18px;
}

.service_item {
  margin: 10px 0;
}

.service_icon {
  height: 100px;
  width: 100px;
  background-color: red;
  margin: 0 auto;
}
.service_inner {
  display: flex;
  justify-content: space-between;
}

.service_body{
  width: 70%;
}
</style>