<template>
  <div>
    <div class="container">
      <div class="main_title">Частые вопросы</div>
      <div class="faq_main">
        <div class="faq_inner">
          <div class="faq_left_side_bar main_block_style main_block_style-less">
            <div class="faq_categories_title">Вопросы</div>
            <template v-for="(item, index) in faqItems">
              <div
                class="faq_category_item"
                :class="{ active: item == currentFaq }"
                @click="changeCurrentCategory(item)"
                :key="index"
              >
                {{ item.title }}
              </div>
            </template>
          </div>
          <div class="faq_content main_block_style main_block_style-less">
            <div class="faq_content_title">{{ currentFaq.title }}</div>
            {{ currentFaq.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeCurrentCategory(cat) {
      this.currentFaq = cat;
    },
  },
  asyncData() {
    return {
      faqItems: [
        {
          title: "Доставка по России",
          content:
            "Доставка по России осуществляется различными транспортными компаниями",
        },
        {
          title: "Доставка по Вологодской области",
          content:
            "Отправляем личным траснпортом, либо привлекаем газели местных транспортных компаний",
        },
        {
          title: "Способы оплаты",
          content:
            "Оплатить заказы можно переводом на карту, по безналу, либо наличными",
        },
      ],
      currentFaq: undefined,
    };
  },
  created() {
    if (this.faqItems.length) {
      this.currentFaq = this.faqItems[0];
    }
  },
};
</script>

<style scoped>
.faq_inner {
  display: flex;
}

.faq_left_side_bar {
  width: 25%;
  margin-right: 15px;
  height: 100%;
}

.faq_content {
  width: 75%;
}

.faq_content_title {
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.faq_category_item {
  font-size: 15px;
  cursor: pointer;
  transition-duration: 0.5s;
  padding: 5px 10px 5px 0;
}

.faq_categories_title {
  font-size: 20px;
  font-weight: bold;
}

.faq_category_item:hover {
  background: #ffe373;
  padding-left: 10px;
}

.faq_category_item.active {
  background: #fc0;
  padding-left: 10px;
}
</style>