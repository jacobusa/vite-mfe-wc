import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), dts({ include: ['src'] })],
    define: {
      'process.env': env,
    },
    build: {
      copyPublicDir: false,
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        formats: ['es'],
      },
      // Externalize peer dependencies
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          entryFileNames: 'bundle.js',
          format: 'esm',
          // Provide global variables to use in the UMD build for externalized deps
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    server: {
      port: 3004,
    },
    preview: {
      port: 3004,
    },
  };
});
