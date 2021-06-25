import { createApp } from 'vue';
import primevue from '@/plugins/primevue';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(primevue);

app.mount('#app');
