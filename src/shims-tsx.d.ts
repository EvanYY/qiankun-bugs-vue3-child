import Vue, { VNode } from 'vue'

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: any
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any
    monaco: any
  }
}
