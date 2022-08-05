import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

// const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(ElementPlus).use(router).mount("#app");
