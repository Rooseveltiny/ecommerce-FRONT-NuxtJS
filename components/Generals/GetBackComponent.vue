<template>
    <div
      :class="{
        get_back_block: type === 'left',
        right_side_block: type !== 'left',
      }"
      @click="getBack()"
      v-if="includedComponent"
    >
      <div :class="{ get_back_block_inner: type === 'left' }">
        <span v-if="type === 'left'">назад</span>
      </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
        allowedComponents: ['catalog-product-uuid', 'track']
      }
    },
  computed: {
    includedComponent(){
      let currentComponent = this.$nuxt.$route.name
      return this.allowedComponents.includes(currentComponent)
    }
  },
  props: {
    type: {
      type: String,
      default: "left",
    },
  },
  methods: {
    getBack() {
      if (this.type === "left") {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style scoped>
.get_back_block {
  display: flex;
  color: #999;
  flex: 1;
  transition-duration: 0.5s;
}
.get_back_block_inner {
  padding: 15px 0 0 35px;
  position: relative;
  height: 75vh;
}
.get_back_block_inner::after {
  opacity: 0;
  position: absolute;
  display: block;
  content: "";
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  width: 8px;
  height: 8px;
  top: 24px;
  right: 45px;
  z-index: 1000;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}
.get_back_block:hover {
  display: flex;
  color: #666;
  flex: 1;
  background-color: #ebe4e4;
}
.get_back_block:hover .get_back_block_inner::after {
  transform: rotate(-135deg);
  opacity: 1;
}
.right_side_block {
  flex: 1;
}
.extra_container {
  display: flex;
}
</style>