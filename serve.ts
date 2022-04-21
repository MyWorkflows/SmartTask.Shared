import { createApp } from 'vue';
import Dev from './serve.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(Dev);

app.mount('#app');
