import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import importMapPlugin, { Env } from "./plugins/importMapPlugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as Env;
  return {
    plugins: [react(), importMapPlugin({ env })],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    build: {
      target: "esnext",
      minify: false,
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled into your library.
        // lots of these are served from cdn
        external: ["react", "react-dom", "react-router-dom"],
        output: {
          globals: {
            react: "react",
            reactDom: "react-dom",
            reactRouterDom: "react-router-dom",
          },
        },
      },
    },
  };
});
