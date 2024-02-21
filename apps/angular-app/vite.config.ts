import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  server: {
    port: 3003,
    origin: "http://localhost:3003",
  },
});
