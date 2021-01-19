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
}
</style>