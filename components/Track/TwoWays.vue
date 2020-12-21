<template>
  <div>
    <client-only>
      <vue-typer
        class="typer_class"
        text="Есть 2 способа это сделать!"
        :repeat="0"
      ></vue-typer>
      <Ways />
      <div class="go">
        <div @click="$router.push({query:{component: 'Tracking'}})" class="go_btn">Ввести номер</div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Ways from "./Ways/index";
import { mapMutations } from "vuex";
export default {};
</script>

<style>
.go {
  margin-top: 30px;
}

.go_btn {
  padding: 10px 30px;
  background-color: #fc0;
  margin: 0 auto;
  font-size: 20px;
  width: max-content;
  cursor: pointer;
}

.typer_class {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 22px;
}

.typer_class .custom.char.typed:nth-child(6) {
  padding: 1px 7px;
  background-color: #fc0;
}

.custom.char.typed {
  padding: 1px 0;
}

</style>