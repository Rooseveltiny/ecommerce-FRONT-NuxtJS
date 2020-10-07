<template>
  <div>
      <div class="profile_user_data">
        <template v-for="(data, index) in userData">
          <div :key="index" class="profile_data_item">
            {{ data }}
          </div>
        </template>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({userData: 'user/getUserData'})
    }
};
</script>

<style scoped>

    .profile_user_data{
        font-size: 15px;
    }

</style>