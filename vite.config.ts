import path from 'path';
import { defineConfig } from 'vite';
import vitePluginIIFELibrary from './vite-plugin-iife-library.js';
// Import plugins if necessary
// import reactRefresh from '@vitejs/plugin-react';
//@ts-ignore
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Development mode configuration
    return {
      // Enable plugins if needed
      // plugins: [reactRefresh()],
      server: {
        open: true, // Automatically open the app in the browser
      },
      // Additional dev-specific configurations
    };
  } else {
    // Production build configuration
    return {
      build: {
        sourcemap: true,
        minify: 'esbuild',
        lib: {
          entry: path.resolve(__dirname, 'src/main.ts'),
          name: 'tourbuilder',
          fileName: () => `class-tourbuilder-360ty.js`,
        },
      },
      plugins: [
        // Your existing plugins
        vitePluginIIFELibrary('class-tourbuilder-360ty.js'),
      ],
      // Additional build-specific configurations
    };
  }
});
