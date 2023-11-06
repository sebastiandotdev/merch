import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['html', 'text', 'json']
    },
    ui: true, 
    environment: 'happy-dom',
    globals: true,
  },
})
