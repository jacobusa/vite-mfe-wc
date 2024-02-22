import { defineCustomElement } from "vue";
import "./style.css";
import App from "./App.vue";

// createApp(App).mount("#app");

export const AppCustomElement = defineCustomElement(App);

customElements.define("vue-app", AppCustomElement);
