import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5632,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    exclude: ['**/node_modules/**', '**/dist/**', 'src/components/ThemeToggle/**', 'src/theme/**'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
})
