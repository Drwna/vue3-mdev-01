import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { AutoRegisterComponents } from './component';
import { ConfigMockPlugin } from './mock';
import { SvgIconsPlugin } from './svgIcon';

export function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    // 自动按需引入组件
    AutoRegisterComponents(),
    // mock
    ConfigMockPlugin(),
    // svg icons
    SvgIconsPlugin(),
  ];

  return vitePlugins;
}
