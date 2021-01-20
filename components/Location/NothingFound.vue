<template>
  <div class="nothing_found">
    <div class="nothing_found_inner">
      <div class="nothing_found_block">
        <span class="nth_text">Ничего не найдено</span>
        <div class="nothing_found_icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nothing_found_icon {
  background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/desert.svg);
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.nothing_found_inner {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.nth_text{
    font-size: 22px;
    text-align: center;
}  


</style>