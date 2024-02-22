import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    port: 3003,
    origin: 'http://localhost:3003',
  },
  preview: {
    port: 3003,
  },
  build: {
    manifest: true,
    minify: false,
    target: 'esnext',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: [],
      input: './src/main.ts',
      // preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: 'bundle.js',
        format: 'esm',
        // Provide global variables to use in the UMD build
        // for externalized deps
      },
    },
  },
});
