// External CSS and JS files
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Vue
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import App from '@/App.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import HomePage from '@/components/HomePage.vue'

// i18n
import en from '@/i18n/en.json'
import zhCN from '@/i18n/zh-cn.json'
import ja from '@/i18n/ja.json'

export const routes = [
  { path: '/', name: 'root', component: WelcomePage },
  { path: '/home', name: 'home', component: HomePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const messages = {
  en: en,
  'zh-CN': zhCN,
  ja: ja
}

export const languages = [
  { code: 'zh-CN', name: zhCN.name },
  { code: 'en', name: en.name },
  { code: 'ja', name: ja.name }
]

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en',
  allowComposition: true,
  messages
})

createApp(App).use(router).use(i18n).mount('#app')
