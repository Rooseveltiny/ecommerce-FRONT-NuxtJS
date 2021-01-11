<template>
  <div class="search">
    <div class="search_inner">
      <div class="search_line">
        <input
          class="search_input"
          type="text"
          name=""
          placeholder="номер заказа"
          v-model="inputString"
        />
        <div class="search_btn" :class="getBtnClass">Поиск</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputString: "",
    };
  },
  computed: {
    getBtnClass() {
      return this.inputString.length ? "" : "no-drop";
    },
  },
};
</script>

<style scoped>
/* btn_classes */
.no-drop {
  cursor: no-drop !important;
  background-color: #ffe373 !important;
}

.search {
  margin-top: 50px;
}

.search_line {
  display: flex;
  height: 40px;
  width: 70%;
  margin: 0 auto;
}

.search_input {
  width: 80%;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #ffe373;
  padding-left: 20px;
  outline: none;
  transition-duration: 0.5s;
}

.search_btn {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #fc0;
  cursor: pointer;
}
</style>