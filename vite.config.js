import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    outDir: "build",
    target: "es2015",
    minify: "terser",
    sourcemap: true,
    assetsDir: "assets",
  },
});
