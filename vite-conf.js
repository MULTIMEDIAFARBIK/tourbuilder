import { defineConfig } from 'vite'
import pano2vrPlayer from './src/pano2vr_player_v7';
import pano2vrSkin from './src/skin_module.js';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineConfig({
  plugins: [pano2vrPlayer(),pano2vrSkin()],
  optimizeDeps:{
    esbuildOptions:{
      plugins:[
        esbuildCommonjs(['pano2vrPlayer',"pano2vrSkin"])
      ],
      sourcemap:"external",
    }
  }
})
