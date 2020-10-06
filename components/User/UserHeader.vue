<template>
  <div class="user_header">
      <div class="user_panel" v-if="logStatus">
    {{ userName }}
    <div class="user_settings global_border_shadow" v-if="logStatus">
          <nuxt-link to="/user_profile"><div class="user_settings_item">Профиль</div></nuxt-link>
          <div @click="logoutAction()" class="user_settings_item">Выйти</div>
      </div>
      </div>
      <div class="user_panel enter_system" v-if="!logStatus">
        <nuxt-link to="/login">Войти / Создать аккаунт</nuxt-link>
      </div>
      
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      userName: "user/getFirstNameAndLastName",
      logStatus: "user/getLogStatus",
    }),
  },
  methods: {
      ...mapActions({logout: 'user/logout'}),
      async logoutAction(){
          await this.logout();
          location.reload();
      }
  }
};
</script>

<style scoped>

.user_panel{
    padding: 0 10px;
    background: #ffe373;
    width: max-content;
    position: relative;
}

.user_header{
    display: flex;
    justify-content: flex-end;
}

.user_panel:hover .user_settings{
    visibility: visible;
    opacity: 1;
}

.user_settings{
    visibility: hidden;
    opacity: 0;
    position: absolute;
    display: grid;
    top: 25px;
    z-index: 1500;
    background: #fff;
    width: 100%;
    left: 0;
    font-size: 12px;
    transition-duration: .3s;
}

.user_settings_item{
    display: flex;
    padding: 5px 10px;
    cursor: pointer;
}

.user_settings_item:hover{
    background: #ffe373;
}

.enter_system{
    transition-duration: .3s;
    font-size: 14px;    
}

.enter_system{
    color: #666;
}

</style>