<template>
  <div>
    <input
      type="text"
      class="input_field search_input"
      placeholder="Поиск по наименованию"
      v-model="searchString"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    searchString: {
      get() {
        return this.$store.state.locations.searchString;
      },
      set(value) {
        this.$store.commit("locations/setSearchString", value);
      },
    },
  },
};
</script>

<style>
</style>