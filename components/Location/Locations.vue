<template>
  <div v-if="show" class="container locations">
    <div class="locations-inner main_block_style global_shadow" v-on-clickaway="away">
      <div class="close_window_btn" @click="showSelectWindow(false)"></div>
      <LocationSearch />
      <template v-if="locs.length">
      <Location :location="item" v-for="(item, index) in locs" :key="index" />
      </template>
      <template v-else>
          <NothingFound />
        </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Location from "./LocationItem";
import LocationSearch from "./LocationSearch";
import NothinFound from "./NothingFound"
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  methods: {
    ...mapMutations({ showSelectWindow: "locations/showSelectWindow" }),
    away: function () {
      this.showSelectWindow(false);
    },
  },
  components: { Location },
  computed: {
    ...mapGetters({
      locs: "locations/getFullList",
      show: "locations/getShownUpSelectWindow",
    }),
  },
};
</script>

<style scoped>
.locations {
  position: absolute;
  z-index: 10000;
}
.locations-inner {
  position: relative;
}

.close_window_btn {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.close_window_btn:after,
.close_window_btn:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 4px;
  background-color: rgb(197, 197, 197);
  transform: rotate(45deg);
  top: 50%;
}
.close_window_btn:before {
  transform: rotate(-45deg);
}
</style>