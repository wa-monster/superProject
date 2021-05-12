import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import styleImport from "vite-plugin-style-import"
import path from "path"
const resolve = (dir: string) => path.join(__dirname, dir)
// 引入svg插件
import { svgBuilder } from "./src/plugins/svgBuilder"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    [svgBuilder("./src/icons/svg/")], // 导入所有svg
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "element-plus",
    //       esModule: true,
    //       ensureStyleFile: true,
    //       resolveStyle: (name) => {
    //         name: name.slice(3)
    //         return `element-plus/packages/theme-chalk/src/${name}.scss`
    //       },
    //       resolveComponent: (name) => {
    //         return `element-plus/lib/${name}`
    //       },
    //     },
    //   ],
    // }),
  ],
  resolve: {
    // 别名
    alias: {
      "@": resolve("src"),
      '@views': resolve("src/views"),
      '@comps': resolve("src/components"),
      '@apis': resolve("src/apis"),
      '@utils': resolve("src/utils"),
      '@styles': resolve("src/styles"),
    },
  },
  // 服务
  server: {
    host: "",
    port: 9527,
    strictPort: false,
    open: true,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
