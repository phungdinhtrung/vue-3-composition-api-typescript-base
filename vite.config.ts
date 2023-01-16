import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

export default ({ mode }) => {
  // Load config-level env vars; in src: can use import.meta.env.VITE_APP_PORT
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: process.env.VITE_CLIENT_PORT,
      watch: {
        usePolling: true
      }
    }
  });
}

