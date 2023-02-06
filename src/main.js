import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router/index";
import Pattern from './components/Pattern';

const app = createApp(App);
app.component('Pattern', Pattern);
app.use(router).mount("#app");