<template>
  <div class="main">
    <div class="title_outter">
      <nuxt-link :to="{ path: `/catalog/product/${product.link}` }">
        <div class="title">
          {{ product.title }}
        </div>
      </nuxt-link>
      <div class="product_code">
        {{ product.product_code }}
      </div>
    </div>
    <div class="details">
      <div
        class="detail"
        v-for="(detail, index) in product.details"
        :key="index"
      >
        {{ detail.title }}
      </div>
    </div>
    <div class="balance">
      <div class="balance_inner">
        {{ product.balance }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.main {
  width: 55%;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 18px;
  color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  transition: color .5s;
}

.title:hover{
    color: rgb(155, 101, 1);
}

.product_code {
  font-size: 12px;
}

.details {
  display: flex;
}

.detail {
  font-size: 14px;
  padding: 3px 7px;
  margin: 0 5px;
  background-color: #ffe373;
}
.detail:first-child {
  margin-left: 0;
}

.balance_inner {
  width: fit-content;
  background-color: rgb(240, 240, 240);
  padding: 0 10px;
}
</style>