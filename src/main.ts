import { createApp } from 'vue';
import store from '@/stores';
import '@/styles/reset.css';
import 'virtual:svg-icons-register';
import 'amfe-flexible';
import '@/styles/helper.scss';

import { VueMasonryPlugin } from 'vue-masonry';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(VueMasonryPlugin);

app.use(store);
app.use(router);

app.mount('#app');

function z() {
  if (window.innerWidth >= 500) {
    document.documentElement.style.fontSize = '37.5px';
  }
}

z();
window.onresize = z;
