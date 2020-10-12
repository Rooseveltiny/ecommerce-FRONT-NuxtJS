<template>
  <div class="main_block_change">
    <form v-on:submit.prevent="changePassForm()" class="input_block">
      <label class="input_label" for="old_pass">Старый пароль</label>
      <input
        v-model="changePass.oldPass"
        required
        class="input_field"
        type="text"
        id="old_pass"
      />
      <label class="input_label" for="newPassword">Новый пароль</label>
      <input
        v-model="changePass.newPass"
        required
        class="input_field"
        id="newPassword"
      />
      <label class="input_label" for="newPasswordRe">Повторить пароль</label>
      <input
        v-model="changePass.newPassRe"
        required
        class="input_field"
        id="newPasswordRe"
      />
      <button class="form_btn">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changePass: {
        oldPass: "",
        newPass: "",
        newPassRe: "",
      },
    };
  },
  methods: {
    async changePassForm() {
      await this.$api_ecommerce_auth
        .post("password/change", this.changePass)
        .then((resp) => {
          if (resp.status == 200) {
              this.changePass.oldPass = '';
              this.changePass.newPass = '';
              this.changePass.newPassRe = '';
            this.$notify(
              {
                type: "success",
                group: "login",
                title: resp.data,
                text: "",
              },
              4000
            );
          }
        }).catch(error=>{
           this.$notify(
              {
                type: "error",
                group: "login",
                title: error.response.data,
                text: "",
              },
              4000
            ) 
        });
    },
  },
};
</script>

<style scoped>
.input_block {
  display: grid;
}

.main_block_change {
  width: 330px;
}

.input_field {
  height: 30px;
  margin-bottom: 10px;
}



.input_label {
  font-size: 12px;
}
</style>