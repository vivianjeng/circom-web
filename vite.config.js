import { defineConfig } from 'vite'
import { resolve } from 'path'

const pages = [
  'index', 'preflight', 'pipeline', 'math', 'syntax',
  'zkrepl', 'poseidon', 'merkle', 'mixer',
  'security', 'homework', 'slides',
]

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map(p => [p, resolve(import.meta.dirname, `${p}.html`)])
      ),
    },
  },
})
