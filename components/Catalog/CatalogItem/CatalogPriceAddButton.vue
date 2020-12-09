<template>
  
  <div class="main">
      <div class="price">
          {{product.price}}
      </div>
  </div>

</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>

<style scoped>

.main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    padding-left: 15px;
}

.price{
    font-size: 18px;
    font-weight: bold;
    color: black;
}


</style>