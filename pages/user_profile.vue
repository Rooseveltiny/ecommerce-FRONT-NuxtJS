<template>
  <div class="section">
    <div class="container">
      <div class="profile_main">
        <div class="side_links main_block_style main_block_style-less">
          <template v-for="(link, index) in allLinks">
            <div
              :key="index"
              @click="currentLink = link"
              class="side_link_item"
              :class="{ active: link == currentLink }"
            >
              {{ link }}
            </div>
          </template>
        </div>
        <div class="profile_data main_block_style main_block_style-less">
                <div class="profile_title">{{currentLink}}</div>
          <div v-if="currentLink == 'Пользователь'" class="profile_data_inner">
            <div class="profile_user_data">
              <template v-for="(data, index) in userData">
                <div :key="index" class="profile_data_item">
                  {{ data }}
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentLink: "Пользователь",
      allLinks: ["Пользователь", "Сменить пароль"],
    };
  },
  computed: {
    ...mapGetters({ user: "user/getUserData" }),
    userData() {
      return Object.values(this.user);
    },
  },
};
</script>

<style scoped>
.profile_main {
  display: flex;
}

.side_links {
  width: 20%;
  margin-right: 15px;
  height: 100%;
}

.profile_data {
  width: 80%;
}

.side_link_item {
  padding: 5px 15px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.side_link_item:hover {
  background: #ffe373;
}

.side_link_item.active {
  background: #fc0;
}

.active {
  position: relative;
}

.active:after {
  position: absolute;
  content: "";
  background: rgb(211, 112, 112);
  width: 3px;
  height: 100%;
  left: 0;
  top: 0;
}

.profile_data_item {
  width: 50%;
  padding: 0 5px;
}

.profile_title{
    margin: 0 0 10px 5px;
    font-weight: bold;
    font-size: 20px;
}

</style>