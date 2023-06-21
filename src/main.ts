import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const messages = {
  en: {
  },
  'zh-CN': {
  },
  ja: {
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  allowComposition: true,
  messages
})

createApp(App).use(i18n).mount('#app')
