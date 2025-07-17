import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // css 预处理器相关配置
  css: {
    preprocessorOptions: {
      // scss 配置项，可以为所有 scss 文件自动注入公共样式
      scss: {
        // 注意路径写法，推荐使用绝对路径或 @ 路径别名，如 src/bem.scss
        additionalData: `@import "${path.resolve(__dirname, 'src/bem.scss')}";`
      }
    }
  }
})
