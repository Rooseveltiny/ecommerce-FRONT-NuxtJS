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
                {{ item.question }}
              </div>
            </template>
          </div>
          <div class="faq_content main_block_style main_block_style-less">
            <div class="faq_content_title">{{ currentFaq.question }}</div>
            <div class="faq_content_text" v-html="currentFaq.answer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $api_ecommerce_vdk }) {
    const faqItems = await $api_ecommerce_vdk.$get("faq");
    let currentFaq = undefined;

    if (faqItems.length) {
      currentFaq = faqItems[0]
    }
    return { faqItems, currentFaq };
  },
  data: () => ({
    currentFaq: undefined,
  }),
  methods: {
    changeCurrentCategory(cat) {
      this.currentFaq = cat;
    },
  },
  created() {},
};
</script>

<style scoped>

ul{
  padding-left: 15px;
}

.faq_inner {
  display: flex;
}

.faq_left_side_bar {
  width: 30%;
  margin-right: 15px;
  height: 100%;
}

.faq_content {
  width: 70%;
  height: 100%;
}

.faq_content_text{
  text-align: justify;
}

.faq_content_title {
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.faq_category_item {
  font-size: 15px;
  cursor: pointer;
  transition-duration: 0.5s;
  padding: 5px 10px 5px 0;
  margin: 5px 0;
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