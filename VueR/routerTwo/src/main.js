// main.js

import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createRouter, createWebHistory } from 'vue-router' // vue-router import
import routes from './routes' // routes import

// 라우터 개체를 생성 합니다.
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 생성한 라우터 개체를 use 해줍니다.
createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')