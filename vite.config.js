import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'tonyapuzzle',
      // the proper extensions will be added
      fileName: 'tonyapuzzle',
    },
  },
  plugins: [
    svelte(
      { compilerOptions: { customElement: true } }
    )
  ],
})
