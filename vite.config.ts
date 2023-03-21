import path from 'path';
import { defineConfig } from 'vite';
const vitePluginIIFELibrary = require('./vite-plugin-iife-library');

export default defineConfig({
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
      ],
      sourcemap:true,
      minify:true
    }
  },
  build:{
    sourcemap:true,
    minify:"esbuild",
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'tourbuilder',
      fileName: (format) => `class-tourbuilder-360ty.js`,
      
    },
  }, 
  plugins: [
    vitePluginIIFELibrary("class-tourbuilder-360ty.js")
  ]
})
