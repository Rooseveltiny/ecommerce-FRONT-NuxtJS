<template>
  <div class="section">
    <div class="container">
      <div class="sign_in">
        <div
          v-if="!message_block.show"
          class="sign_in_inner main_block_style main_block_style-less"
        >
          <div class="sign_in_title">{{ allTypes[currentType] }}</div>
          <template v-if="currentType == 'login'">
            <form v-on:submit.prevent="loginForm()" class="input_block">
              <label class="input_label" for="email">Электронная почта</label>
              <input
                v-model="loginData.email"
                required
                class="input_field"
                type="email"
                id="email"
              />
              <label class="input_label" for="password"
                >Пароль<div @click="showHidePassword()" class="btn_show_hide_pass" :class="{opened: passwordType=='text'}"></div
              ></label
              >
              <input
                v-model="loginData.password"
                required
                class="input_field"
                :type="passwordType"
                id="password"
              />
              <button class="form_btn">Войти</button>
            </form>
            <span class="type_btn" @click="setCurrentType('restore')"
              >Забыли пароль?</span
            >
            <span class="type_btn" @click="setCurrentType('reg')"
              >Регистрация</span
            >
          </template>
          <template v-else-if="currentType == 'reg'">
            <form v-on:submit.prevent="regUserForm()" class="input_block">
              <label class="input_label" for="name">Имя</label>
              <input
                v-model="regData.first_name"
                required
                class="input_field"
                type="text"
                id="name"
              />
              <label class="input_label" for="sir_name">Фамилия</label>
              <input
                v-model="regData.last_name"
                required
                class="input_field"
                type="text"
                id="sir_name"
              />
              <label class="input_label" for="phone">Мобильный телефон</label>
              <input
                v-model="regData.phone"
                required
                class="input_field"
                type="number"
                id="phone"
              />
              <label class="input_label" for="email">Электронная почта</label>
              <input
                v-model="regData.email"
                required
                class="input_field"
                type="email"
                id="email"
              />
              <label class="input_label" for="password"
                >Пароль
                <div @click="showHidePassword()" class="btn_show_hide_pass" :class="{opened: passwordType=='text'}"></div
              ></label>
              <input
                v-model="regData.password"
                required
                class="input_field"
                :type="passwordType"
                id="password"
              />
              <label class="input_label" for="password">Повторите пароль</label>
              <input
                v-model="regData.re_password"
                required
                class="input_field"
                :type="passwordType"
                id="password"
              />
              <button class="form_btn">Регистрация</button>
            </form>
            <span class="type_btn" @click="setCurrentType('login')">Войти</span>
          </template>
          <template v-else-if="currentType == 'restore'">
            <form v-on:submit.prevent="restorePassForm()" class="input_block">
              <label class="input_label" for="email">Электронная почта</label>
              <input
                v-model="restoreData.email"
                required
                class="input_field"
                type="email"
                id="email"
              />
              <button class="form_btn">Восстановить пароль</button>
            </form>
            <span class="type_btn" @click="setCurrentType('login')">Войти</span>
            <span class="type_btn" @click="setCurrentType('reg')"
              >Регистрация</span
            >
          </template>
        </div>
        <div
          v-if="message_block.show"
          class="message_block main_block_style main_block_style-less"
        >
          {{ message_block.message_text }}
          <button @click.prevent="enter" class="form_btn">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      passwordType: "password",
      message_block: {
        show: false,
        message_text: "",
      },
      loginData: {
        email: "",
        password: "",
      },
      regData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        re_password: "",
      },
      restoreData: {
        email: "",
      },
    };
  },
  asyncData() {
    return {
      currentType: "login",
      allTypes: {
        reg: "Зарегистрироваться",
        login: "Войти в систему",
        restore: "Восстановить пароль",
      },
    };
  },
  computed: {
    regDataComputed() {
      this.regData.username = this.regData.email;
      return this.regData;
    },
  },
  methods: {
    setCurrentType(type) {
      this.currentType = type;
    },
    ...mapActions({
      regUser: "user/regUser",
      login: "user/login",
      setToken: "user/setToken",
      restorePass: "user/restorePass",
    }),
    async regUserForm() {
      let resp = await this.regUser(this.regDataComputed);
      if (resp.status == 201) {
        this.message_block.show = true;
        this.message_block.message_text = `Вы успешно зарегистрировались, теперь Вы можете войти в личный кабинет.  `;
      } else {
        for (let text of Object.values(resp.data)) {
          this.$notify(
            { type: "error", group: "login", title: `${text}` },
            4000
          );
        }
      }
    },
    async loginForm() {
      let resp = await this.login(this.loginData);
      if (resp.status == 200) {
        await this.setToken();
        this.$router.go(-1);
        this.$notify(
          {
            type: "success",
            group: "login",
            title: `Вы успешно авторизовались!`,
          },
          4000
        );
      } else if (resp.status == 304) {
        this.$notify(
          { type: "success", group: "login", title: `Вы уже в системе!` },
          4000
        );
      } else {
        for (let text of Object.values(resp.data)) {
          this.$notify(
            { type: "error", group: "login", title: `${text}` },
            4000
          );
        }
      }
    },
    async restorePassForm() {
      await this.restorePass(this.restoreData).then((resp) => {
        if (resp.status === 200) {
          this.$notify(
            {
              type: "success",
              group: "login",
              title: `Новый пароль отправлен на почту. Теперь вы можете осуществить вход!`,
            },
            4000
          );
          this.currentType = "login";
        } else if (resp.status === 404) {
          this.$notify(
            {
              type: "error",
              group: "login",
              title: `Почта ${this.restoreData.email} отсутствует в системе!`,
              text: "Пожалуйста, укажите другую почту",
            },
            4000
          );
        } else {
          this.$notify(
            {
              type: "error",
              group: "login",
              title: `В ходе восстановления пароля возникла ошибка`,
            },
            4000
          );
        }
      });
    },
    enter() {
      this.$router.go("/login");
    },
    showHidePassword() {
      if (this.passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
};
</script>

<style scoped>
.sign_in {
  display: flex;
  justify-content: center;
}

.sign_in_inner {
  width: 300px;
  display: grid;
}

.sign_in_title {
  text-align: center;
  font-size: 15px;
  color: #333;
  font-weight: bold;
}

.input_field {
  border: 1px solid #999;
  height: 35px;
  margin-bottom: 10px;
  transition: border-color 0.2s;
}

.input_label {
  color: #999;
  font-size: 13px;
  position: relative;
}

.input_block {
  width: 90%;
  display: grid;
  margin: 5px auto 0 auto;
}

.input_field:focus,
.input_field:active {
  outline: none;
  border-color: #fc0;
  border-width: 2px;
  border-top: none;
  border-left: none;
  border-right: none;
}

.type_btn {
  color: #666;
  margin-top: 20px;
  border-bottom: 1px dashed #555;
  width: fit-content;
  margin: 10px auto 0 auto;
  font-size: 12px;
  cursor: pointer;
}

.btn_show_hide_pass {
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 6px;
  top: 113%;
  background: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/closed-eyes-with-lashes-and-brows.svg)
    no-repeat;
  background-size: 70%;
  background-position: center center;
}

.opened.btn_show_hide_pass{
  background: url(https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/eye-outline-variant-with-lashes-and-enlarged-pupil.svg)
    no-repeat;
    background-size: 70%;
  background-position: center center;
}
</style>