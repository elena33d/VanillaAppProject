import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'src',
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://your-energy.b.goit.study;"
    }
  },
  build: {
    outDir: '../docs',
    base: './',
  }
})