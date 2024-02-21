import "@angular/compiler";
import "zone.js";
import { AppComponent } from "./app.component";
import { bootstrapApplication } from "@angular/platform-browser";

class WebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const root = document.createElement("angular-root");
    this.appendChild(root);
    bootstrapApplication(AppComponent);
  }
}

customElements.define("angular-app", WebComponent);
