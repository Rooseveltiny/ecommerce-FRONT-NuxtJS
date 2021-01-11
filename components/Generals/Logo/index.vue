<template>
  <div
    class="logo"
    @mouseenter="setComponent('OnMain')"
    @mouseleave="setComponent('ChanginLogo')"
  >
    <nuxt-link :to="'/'" class="logo_inner">
      <transition name="logo-on-main-fade" mode="out-in">
        <keep-alive>
          <component :is="currentComponent" />
        </keep-alive>
      </transition>
    </nuxt-link>
  </div>
</template>

<script>
import ChanginLogo from "@/components/Generals/Logo/ChanginLogo";
import OnMain from "@/components/Generals/Logo/OnMain";
export default {
  components: { ChanginLogo, OnMain },
  data() {
    return {
      currentComponent: "ChanginLogo",
    };
  },
  methods: {
    setComponent(comp) {
        if (this.$route.name === 'index'){
            this.currentComponent = 'ChanginLogo'
            return
        }
        this.currentComponent = comp;
      }
    },
};
</script>

<style scoped>
.logo {
  width: 120px;
  height: 45px;
  background-image: url(~assets/logo/svg-editor-image.svg);
  background-position: center center;
  background-size: cover;
}

.logo_inner {
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
}
</style>