<template>
  <div class="title">
    <div class="title_inner" :class="titleType">
      {{ title }}
    </div>
  </div>
</template>

<script>
/*
Use titleType to define which type this title is.

props:
- title: just usual big main title.
- titletype: title type which is used in concrete component.

*default value is - title.
*/
export default {
  computed: {
    titleType() {
      return this.isSubTitle ? "sub_title" : "just_title";
    },
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    isSubTitle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  text-align: center;
}

.title_inner {
}

.sub_title {
  font-size: 18px;
}

.just_title {
  font-size: 24px;
  font-weight: bold;
}
</style>