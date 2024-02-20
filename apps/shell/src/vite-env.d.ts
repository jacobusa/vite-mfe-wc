/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinisicElements {
      "react-app": HTMLElement;
    }
  }
}
