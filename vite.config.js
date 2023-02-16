// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

module.exports = {
    build: {
      //输出路径
      outDir: 'TonyaPuzzleUI',
      rollupOptions: {
        output: {
          entryFileNames: `assets/tpUI.js`,
          // chunkFileNames: `assets/TonyaPuzzle.js`,
          assetFileNames: `assets/tpUI.[ext]`
        }
      }
      // lib: {
      //   // Could also be a dictionary or array of multiple entry points
      //   entry: resolve(__dirname, 'src/main.js'), // 设置入口文件
      //   name: 'TonyaPuzzle', // 起个名字，安装、引入用
      //   fileName: `TonyaPuzzle` // 打包后的文件名
      // }
    }
}

