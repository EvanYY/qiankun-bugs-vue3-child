import './public-path'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import store from './store'

let router = null
let instance: any = null
let history: any = null

function render(props = {}) {
  const { container }: any = props
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/' : '/')
  router = createRouter({
    history,
    routes,
  })

  instance = createApp(App)
  instance.use(router)
  instance.use(store)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

function storeTest(props: any) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value: any, prev: any) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    )
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    })
}

export async function mount(props: any) {
  console.log('🚀 ~ file: main.ts ~ line 51 ~ mount ~ props', props)
  storeTest(props)
  render(props)
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange
  instance.config.globalProperties.$setGlobalState = props.setGlobalState
}

export async function unmount() {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
  history.destroy()
}
