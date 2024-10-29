import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Alvo do seu backend
        changeOrigin: true, // Altera a origem da solicitação para o alvo
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove "/api" do início do caminho
      },
    },
  },
  base: './', 
});
