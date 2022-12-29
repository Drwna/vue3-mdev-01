import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/styles/reset.css';
import 'virtual:svg-icons-register';
import 'amfe-flexible';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
