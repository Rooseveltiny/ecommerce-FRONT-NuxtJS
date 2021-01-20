<template>
  <div class="section_class">
    <div class="titles" :style="{ 'margin-bottom': marginBottom }">
      <Title :title="title" />
      <Title :isSubTitle="true" :title="subTitle" />
    </div>
    <slot />
  </div>
</template>

<script>
import Title from "./Title";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    marginBottom: {
      type: String,
      default: "0px",
    },
  },
};
</script>

<style scoped>
.section_class{
  padding: 0 50px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgb(220,220,220);
}
.section_class:last-child{
  margin-bottom: 0;
  border-bottom: none;
}
</style>