import Vue from 'vue'
import VueNotifications from 'vue-notifications'

if (process.client) {
  Vue.use(VueNotifications)
}