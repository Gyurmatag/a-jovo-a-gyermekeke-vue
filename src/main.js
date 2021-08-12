import { createApp } from 'vue';
import i18n from '@/locales/i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/main.css';

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');
