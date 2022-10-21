
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import path from 'path';
import { defineConfig } from 'vite';


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
})
