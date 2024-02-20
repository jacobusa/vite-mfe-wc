import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      input: {
        index: "./src/main.tsx",
      },
      external: ["react-app"],
    },
  },
});
