<template>
  <div class="section_type_one">
    <div class="big_title title_center">Процесс сотрудничества.</div>
    <div class="cooperation">
        <div class="cooperation_inner">
            <div class="cooperation_item">Сформируйте заявку на сайте или свяжитесь с нами по электронной почте.</div>
            <div class="cooperation_item">Рассчитайте необходимое колличество материала с нашим сотрудником.</div>
            <div class="cooperation_item">Оплатите заказ удобным для Вас способом (наличный или безналичный рассчёт).</div>
            <div class="cooperation_item">Ожидайте доставку заказа на Ваш объект.</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.cooperation_inner{
    width: 60%;
    margin: 30px auto 0 auto;
    padding-left: 60px;
}

.cooperation_item{
    display: flex;
    align-items: center;
    font-size: 18px;
    margin: 15px 0;
    position: relative;
    height: 60px;
    text-align: justify;
}

.cooperation_item::before{
    background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/icons/ok.svg);
    background-repeat: no-repeat;
    background-position: center center;
    content: '';
    width: 40px;
    height: 40px;
    left: -60px;
    position: absolute;
}

</style>