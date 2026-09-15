import { resolve } from 'node:path'
import { defineConfig } from 'vite'


export default defineConfig
({
  base:'/website-autumn-theme/',
  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    nested: resolve(import.meta.dirname, 'resume/index.html'),
    nested: resolve(import.meta.dirname, 'project4/index.html'),
  },
})
