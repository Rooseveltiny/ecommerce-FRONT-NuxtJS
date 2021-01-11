<template>
  <div class="logo">
    <div class="logo_inner">
      <div class="logo_title">
        <div class="logo-begin">всё для</div>
        <div class="logo-changing-word">
          <transition name="logo-fade" mode="in-out">
            <template v-for="(word, index) in logoWords">
              <span
                class="word-span"
                v-if="currentLogoWord == word"
                :key="index"
                >{{ currentLogoWord }}</span
              >
            </template>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoWords: ["фасада", "забора", "кровли"],
      currentLogoWord: "кровли",
      currentLogoIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentLogoWord = this.logoWords[this.currentLogoIndex];
      if (this.currentLogoIndex === this.logoWords.length - 1) {
        this.currentLogoIndex = 0;
      } else {
        this.currentLogoIndex++;
      }
    }, 5000);
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

.logo_title {
  font-size: 11px;
  font-weight: bold;
  color: white;
  height: fit-content;
  text-transform: uppercase;
  padding-bottom: 1px;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: 2px;
}

.logo-changing-word {
  width: 42%;
  text-align: left;
}

.logo-begin {
  width: 43%;
  text-align: center;
}
</style>