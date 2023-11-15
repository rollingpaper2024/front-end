import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  cacheDir: './.vite',  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components')

    }
  }
})
