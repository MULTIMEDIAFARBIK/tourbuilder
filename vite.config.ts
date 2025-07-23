import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    // This plugin will automatically generate the .d.ts declaration files
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    // This is the correct way to configure a library build
    lib: {
      // The entry point of your library
      entry: path.resolve(__dirname, 'src/index.ts'),
      // The global variable name for the IIFE/UMD build
      name: 'Pano360ty',
      // The formats to generate
      formats: ['es', 'cjs', 'iife'],
      // The base name for the output files.
      // Vite will automatically add the correct extensions
      // (e.g., index.es.js, index.cjs.js, index.iife.js)
      fileName: 'index',
    },
    sourcemap: true,
  },
})
