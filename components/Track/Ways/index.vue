<template>
  <div class="ways">
    <div class="ways_inner">
      <div class="way_item">
          <div class="way_icon qr_code"></div>
        <div class="way_title">Отсканируйте QR-code с бланка заказа</div>
      </div>
      <div class="way_item">
          <div class="way_icon way_type"></div>
        <div class="way_title">Введите номер Вашего заказа</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ways_inner {
  display: flex;
  margin-top: 20px;
}

.way_item{
    width: 47%;
    text-align: center;
}


.way_title{
    font-size: 20px;
}

.way_icon{
    height: 210px;
    background-size: 35%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    }

.way_type{
    background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/track/type.svg);
}

.qr_code{
    background-image: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/Pages/track/phone.svg);

}

</style>