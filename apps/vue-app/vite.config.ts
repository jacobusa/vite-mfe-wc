import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    manifest: true,
    minify: false,
    target: 'esnext',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      // external: ["react", "react-dom", "react-to-webcomponent"],
      input: './src/main.ts',
      // preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: 'bundle.js',
        format: 'esm',
      },
    },
  },
  server: {
    port: 3002,
    origin: 'http://localhost:3002',
  },
  preview: {
    port: 3002,
  },
  base: 'http://localhost:3002',
});
