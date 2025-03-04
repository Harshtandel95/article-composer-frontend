import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api/': {  // for content manager
        target: 'https://article-composer-server.vercel.app/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/content/, '')
      },
    }
  }
})
