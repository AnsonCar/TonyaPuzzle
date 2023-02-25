// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     outDir: 'dist', // 构建输出目录
//     minify: 'terser', // 代码压缩方式
//     assetsInlineLimit: 1024, // 资源文件内联大小限制
//     cssCodeSplit: true, // css 代码拆分
//     terserOptions: { // terser 压缩器的配置
//       compress: {
//         drop_console: true, // 移除 console 输出
//         drop_debugger: true, // 移除 debugger 语句
//       },
//     },
//   },
// });

module.exports = {
	plugins: [],
	build: {
		//输出路径
		// outDir: 'TonyaPuzzleUI',
		// assetsDir: 'assets',
		// rollupOptions: {
		// 	input: 'index.html',
		// 	output: {
		// 		entryFileNames: `assets/tpUI.js`,
		// 		// chunkFileNames: `assets/TonyaPuzzle.js`,
		// 		assetFileNames: `assets/tpUI.[ext]`
		// 	}
		// },
		lib: {
		  // Could also be a dictionary or array of multiple entry points
		  entry: resolve(__dirname, 'src/main.js'), // 设置入口文件
		  name: 'TonyaPuzzle', // 起个名字，安装、引入用
		  fileName: `TonyaPuzzle` // 打包后的文件名
		}
	}
}