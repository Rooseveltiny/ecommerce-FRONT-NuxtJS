 <template>
  <div class="input_element">
    <div class="input_title">{{ title }}</div>
    <input v-model="fieldConnect" class="input_style_general" type="text" />
  </div>
</template>
<script>
export default {
    /*
    field - is a route to state in vuex store;
    title - is a word how input called
    values - is a list to select a value
    iconClass - is and icon which should be used near input
    */
  props: ["field", "title", "values", "iconClass"],
  computed: {
    fieldConnect: {
      get() {
        return this.$store.state.catalog.new.newProduct[this.field];
      },
      set(value) {
        this.$store.commit("catalog/new/updateNewProductField", {
          data: value,
          field: this.field,
        });
      },
    },
  },
};
</script>

