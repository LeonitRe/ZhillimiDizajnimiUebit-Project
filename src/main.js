import "bootstrap/dist/css/bootstrap.min.css";
import Embed from "v-video-embed";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./firebase";
import router from "./router";
import store from "./store";
const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
app.use(Embed);
