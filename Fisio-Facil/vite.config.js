import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiTarget = env.VITE_API_URL;

  if (!apiTarget) {
    throw new Error(
      `VITE_API_URL nao definida para o modo "${mode}". Configure em .env.${mode}.`,
    );
  }

  return {
    plugins: [react()],
    build: {
      outDir: "dist",
    },
    server: {
      open: true,
      port: 3000,
      proxy: {
        "/api": {
          target: apiTarget,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    base: "/", // Base deve ser "/" para producao
  };
});
