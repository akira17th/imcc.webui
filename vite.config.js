import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@mui/material', replacement: '@material-ui/core' }
    ]
  },
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://localhost:56676/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  }
})
