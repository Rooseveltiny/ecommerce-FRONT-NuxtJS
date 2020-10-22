<template>
  <div class="section_type_one">
    <div class="feedback">
      <div class="big_title title_center">Возникли вопросы?</div>
      <div class="feedback_block">
          <div class="feedback_btn"><nuxt-link to="/feedback">Свяжитесь с нами</nuxt-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.feedback_block{
    background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/contacts.svg);
    background-position: center center;
    background-size: 100%;
    height: 350px;
    width: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.feedback_btn{
    width: fit-content;
    margin-bottom: 44px;
    background: #fc0;
    padding: 10px 30px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
}

</style>