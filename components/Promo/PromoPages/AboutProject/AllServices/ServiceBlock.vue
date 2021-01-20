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
  border-bottom: 1px dashed rgb(220,220,220);
  padding-bottom: 7px;
}
.service_description {
  font-size: 18px;
  padding-top: 7px;
}

.service_item {
  margin: 50px 0;
}

.service_icon {
  height: 100px;
  width: 100px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin: auto;
  transition-duration: .5s;
}
.service_icon:hover {
  transform: scale(1.05);
}
.service_inner {
  display: flex;
  justify-content: space-between;
}

.service_body{
  width: 70%;
}
</style>