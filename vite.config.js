import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/My-Blog/", // 关键配置：匹配你的仓库名
  build: {
    outDir: "dist", // 确保构建输出到 dist 文件夹（默认就是 dist，可省略）
    emptyOutDir: true, // 构建前清空输出目录
  },
});
