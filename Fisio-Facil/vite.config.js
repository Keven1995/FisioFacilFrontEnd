import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'fisiofacil-backend-byeacga0d9a3d7fc.canadacentral-01.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  base: './', 
});
