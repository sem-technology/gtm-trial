import { defineConfig } from 'vite';
import { resolve } from 'path';
// import vitePluginPug from './plugins/vite-plugin-pug';
import vitePluginPugStatic from '@macropygia/vite-plugin-pug-static'

const root = 'src';
const pageRoot= "src/pages";
export default defineConfig({
  root: pageRoot,
  publicDir: `../assets`,
  build: {
    outDir: '../../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, pageRoot, 'index.pug'),
        blog: resolve(__dirname, pageRoot, 'blog/index.pug'),
        goods1: resolve(__dirname, pageRoot, 'goods/P1001/index.pug'),
        posts1: resolve(__dirname, pageRoot, 'blog/posts/0001/index.pug'),
        order_checkout: resolve(__dirname, pageRoot, 'order/checkout/index.pug'),
        order_complete: resolve(__dirname, pageRoot, 'order/complete/index.pug'),
        about: resolve(__dirname, pageRoot, 'about/index.pug'),
        configure: resolve(__dirname, pageRoot, 'configure/index.pug'),
        list_categories: resolve(__dirname, pageRoot, 'list/categories/index.pug'),
        list_favorite: resolve(__dirname, pageRoot, 'list/favorite/index.pug'),
        list_search: resolve(__dirname, pageRoot, 'list/search/index.pug'),
      }
    }
  },
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vitePluginPugStatic({
      buildOptions: { basedir: "./src/pages" },
      serveOptions: { basedir: "./src/pages" },
    }),
    // vitePluginPug(),
  ],
});