import Vue from 'vue'
import BaseButton from '@/components/UI-kit/Buttons/BaseButton'

const components = { BaseButton }

Object.entries(components).forEach(([_, component]) => {
  Vue.component(component.name, component)
})