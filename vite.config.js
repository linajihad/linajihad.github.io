import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // لأنك بدك اياه على الدومين الرئيسي مباشرة
})