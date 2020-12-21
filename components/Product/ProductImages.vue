<template>
  <div class="product_image" style="width: 300px; height: 300px">
    <template v-if="images.length">
      <Hooper animation="normal" :infiniteScroll="true" :wheelControl="false">
        <Slide v-for="(img, index) in images" :key="index">
          <div
            class="product_image_inner"
            :style="{ 'background-image': `url(${img.cloud_link})` }"
          ></div>
        </Slide>
        <HooperNavigation slot="hooper-addons"></HooperNavigation>
        <Hooper-pagination slot="hooper-addons"></Hooper-pagination>
      </Hooper>
    </template>
    <template v-else>
      <div class="no_image non-select">Нет изображения</div>
    </template>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: { Hooper, Slide, HooperPagination, HooperNavigation },
  props: {
    images: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.product_image_inner {
  width: 300px;
  height: 300px;
  background-image: url("https://im0-tub-ru.yandex.net/i?id=f24e4243859fc56df6544308c72b3dcb&n=13&exp=1");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

.no_image {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(245, 245, 245);
}
</style>