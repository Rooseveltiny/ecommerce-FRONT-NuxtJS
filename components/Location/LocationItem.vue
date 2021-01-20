<template>
  <div
    class="loc"
    :class="{ choosen_city: location.name === currentCity.name }"
    @click="setCity(location); showSelectWindow(false)"
  >
    {{ location.name }}
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations({
      setCity: "locations/setCurrentCity",
      showSelectWindow: "locations/showSelectWindow",
    }),
  },
  computed: {
    ...mapGetters({ currentCity: "locations/getCurrentCity" }),
  },
  props: {
    location: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.loc {
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
  border-bottom: 1px dashed black;
  width: fit-content;
  margin: 20px 0;
}

.choosen_city {
  font-weight: bold;
}
</style>