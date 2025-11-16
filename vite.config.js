import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use repo base only for production builds; dev server will run at '/'
  base: process.env.NODE_ENV === 'production' ? '/HomestayGripzzy/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
