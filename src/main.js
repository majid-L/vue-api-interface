import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router/index";
import Pattern from './components/Pattern';
import User from './components/User';

const app = createApp(App);
app.component('Pattern', Pattern);
app.component('User', User);
app.use(router).mount("#app");