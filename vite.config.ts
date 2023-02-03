import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { createVitePlugins } from './plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: false, //自动打开
    base: './ ', //生产环境路径
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api/remote/': {
        target: 'http://www.safereborn.com:8091/',
        // target: 'http://192.168.0.154:8091/',
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api\/remote/, ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});
