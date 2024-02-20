import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ["react", "react-dom"],
  //     output: {
  //       entryFileNames: "bundle.js",
  //       format: "esm",
  //     },
  //   },
  // },
  build: {
    manifest: true,
    minify: false,
    target: "esnext",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "react-to-webcomponent"],
      input: "./src/main.tsx",
      // preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "react",
          reactDom: "react-dom",
          reactToWebComponent: "react-to-webcomponent",
        },
      },
    },
    // modulePreload: {
    //   polyfill: false,
    // },
  },
  server: {
    port: 3001,
  },
});
