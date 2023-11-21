import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars() as Plugin,
  ],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  root: resolve(__dirname, 'src'),
  server: {
    port: 3000,
  },
});
