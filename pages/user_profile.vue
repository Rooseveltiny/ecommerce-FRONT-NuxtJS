<template>
  <div class="section">
    <div class="container">
      <div class="profile_main">
        <div class="side_links main_block_style main_block_style-less">
          <template v-for="(link, index) in allLinks">
            <div
              :key="index"
              @click="currentCompontent = link"
              class="side_link_item"
              :class="{ active: link.title == currentCompontent.title }"
            >
              {{ link.title }}
            </div>
          </template>
        </div>
        <div class="profile_data main_block_style main_block_style-less">
          <div class="profile_title">{{ currentCompontent.title }}</div>
          <component v-bind:is="currentCompontent.component">{{
            currentCompontent.title
          }}</component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileData from "@/components/User/ProfileData";
import ChangePassword from "@/components/User/ChangePassword";

export default {
  data() {
    return {
      currentCompontent: { title: "Профиль", component: ProfileData },
      allLinks: [
        {
          title: "Профиль",
          component: ProfileData,
        },
        { title: "Изменить пароль", component: ChangePassword },
      ],
    };
  },
  computed: {},
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
  padding-left: 30px;
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

.profile_title {
  margin: 0 0 10px 0;
  font-weight: bold;
  font-size: 20px;
}
</style>