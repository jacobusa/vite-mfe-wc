import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ["vue"],
    },
  },
  server: {
    port: 3002,
    origin: "http://localhost:3002",
  },
  preview: {
    port: 3002,
  },
  base: "http://localhost:3002",
});
