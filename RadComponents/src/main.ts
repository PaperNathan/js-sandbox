import { createApp } from "vue";
import "@/styles/main.scss";
import App from "./App.vue";
import Rad from "@/components/Rad";

createApp(App).mount("#app");

Object.keys(Rad).forEach((key) =>
  window.customElements.define(`rad-${key}`, Rad[key])
);
