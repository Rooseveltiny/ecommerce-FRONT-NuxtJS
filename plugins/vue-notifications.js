import Vue from 'vue'
import Notification from 'vue-notification'

if (process.client) {
  Vue.use(Notification)
}