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

// Routes
export const routes = [
  { path: '/', name: 'root', component: WelcomePage },
  { path: '/home', name: 'home', component: HomePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// i18n
const messages = {
  en: {},
  'zh-CN': {},
  ja: {}
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  allowComposition: true,
  messages
})

createApp(App).use(router).use(i18n).mount('#app')
