import { createApp } from 'vue'
import App from './App.vue'
import index from "./store/index";

createApp(App)
.use(index)
.mount('#app')
