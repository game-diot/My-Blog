import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/My-Blog/", // 必须与仓库名一致
  build: {
    outDir: "dist",
    assetsDir: "assets", // 明确指定静态资源目录
  },
});
