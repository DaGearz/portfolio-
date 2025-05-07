import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ works for local dev and custom domain builds
  plugins: [react()],
})