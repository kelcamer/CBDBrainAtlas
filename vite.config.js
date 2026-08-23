import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/CBDBrainAtlas/' : '/',
  server: {
    port: 5173,
    open: true,
  },
}))
