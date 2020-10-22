<template>
  <div class="section_type_one">
    <div class="description">
      <div class="big_title title_center">Чем мы занимаемся?</div>
      <div class="description_content">
        Компания перерабатывает тонколистовой прокат на собственном оборудовании,
        выпускает широкий спектр продукции для строительства.
        <div class="description_items">
        <span class="description_product_item" v-for="(item, index) in desc_items" :key="index">
          {{item}}
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

data(){
  return {
    desc_items: ['Профнастил', 'Металлочерепица', 'Евроштакетник', 'Доборные элементы', 'Металлические грядки']
  }
}

};
</script>

<style scoped>

.description_items{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
}

.description_product_item{
    margin: 10px 15px;
    padding: 5px 25px;
    background-color: #fce373;
    transition-duration: .5s;
    cursor: auto;
}

.description_product_item:hover{
    transform: scale(1.05);
}


.description_content {
  text-align: center;
  font-size: 18px;
  width: 70%;
  margin: 0 auto;
}

</style>