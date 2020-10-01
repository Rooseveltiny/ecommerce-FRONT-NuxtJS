import Vue from 'vue'
import Hooper from 'hooper'

if (process.client) {
  Vue.use(Hooper)
}