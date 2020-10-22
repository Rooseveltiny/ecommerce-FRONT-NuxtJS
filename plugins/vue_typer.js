import Vue from 'vue'
import Typer from 'vue-typer'

if (process.client) {
  Vue.use(Typer)
}