<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer_inner">
          <div class="footer--left_col non-select">
            <div class="footer_section">
              <nuxt-link to="/about_company">
                <div class="footer_item">О компании</div>
              </nuxt-link>
              <nuxt-link to="/track?component=TwoWays">
                <div class="footer_item">Отслеживание заказов</div>
              </nuxt-link>
            </div>
            <div class="footer_section">
              <nuxt-link to="/contacts">
                <div class="footer_item">Контакты</div>
              </nuxt-link>
              <nuxt-link to="/feedback">
                <div class="footer_item">Обратная связь</div>
              </nuxt-link>
            </div>
            <div class="footer_section">
              <nuxt-link to="/faq">
                <div class="footer_item">Частные вопросы</div>
              </nuxt-link>
              <nuxt-link :to="'/promo/about_project'">
                <div class="footer_item">О проекте</div>
              </nuxt-link>
            </div>
          </div>
          <div class="footer--right_col">
            <div class="footer--right_col_inner">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Logo from '@/components/Generals/Logo'
export default {
  methods: {
    ...mapMutations(["changeCurrentPage"])
  }
};
</script>

<style scoped>
.footer {
  background: #333;
  margin-top: 25px;
  color: rgb(245, 245, 245);
}

.footer_inner {
  display: flex;
}

.footer_item {
  padding: 4px 0;
  cursor: pointer;
  transition-duration: 0.5s;
}

.footer_item:hover {
  color: #ffe373;
}

.footer--left_col {
  width: 70%;
  padding: 25px 25px 25px 0;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.footer--right_col {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer--right_col_inner {
  padding: 10px 20px;
  background-color: #fff;
}

</style>