<template>
  <div class="locations-main">
    <div class="locations-current" @click="openSelectWindow">
      {{ currentCity.name }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations({
      openSelectWindow: "locations/showSelectWindow",
      setCurrentCity: "locations/setCurrentCity",
    }),
  },
  computed: {
    ...mapGetters({ currentCity: "locations/getCurrentCity" }),
  },
  mounted(){
      let cityFromLocalStorage = localStorage.getItem('currentCity')
      if (cityFromLocalStorage){
          this.setCurrentCity(JSON.parse(cityFromLocalStorage))
      }
  }
};
</script>

<style scoped>
.locations-main {
  margin: 0 20px 0 0;
}

.locations-current {
  border-bottom: 1px dashed black;
  padding-bottom: 0;
  line-height: 1;
  cursor: pointer;
}
</style>