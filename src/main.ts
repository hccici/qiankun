import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp, initGlobalState, MicroAppStateActions } from 'qiankun'
// 初始化 state
/* const state = { name: 'hhj' }
const actions: MicroAppStateActions = initGlobalState(state) */
const app = createApp(App)
// app.config.globalProperties.$qiankun = actions
app.mount('#app')
/* registerMicroApps([
  {
    name: 'hjView',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/hjView',
  }
]);
setDefaultMountApp('/hjView');
// 启动 qiankun
start(); */