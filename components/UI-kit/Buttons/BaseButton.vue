<template>
  <div class="btn-base">
    <div class="btn-base-inner" :style="[btnBaseStyles, btnBaseInnerStyles]">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "gl-base-btn",
  computed: {
      btnBaseStyles: function(){
          return {
              'font-size': this.fontSize + 'px'
          }
      },
      btnBaseInnerStyles: function(){
          return {
              'padding': this.paddingStyle
          }
      }
  },
  props: {
    title: {
      type: String,
      default: "Кнопочка",
    },
    fontSize: {
        type: Number,
        default: 15
    },
    paddingStyle: {
        type: String,
        default: '7px 10px'
    }
  },
};
</script>

<style scoped>
.btn-base {
  background-color: #fc0;
  cursor: pointer;
  transition: background-color .5s;
  width: fit-content;
}
.btn-base:hover {
  background-color: #ffe373;
}

.btn-base-inner {
  padding: 10px 15px;
}
</style>