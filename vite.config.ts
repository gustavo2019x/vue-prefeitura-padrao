import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import esbuild from 'rollup-plugin-esbuild'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    vue(),
    {
      ...esbuild({
        target: 'chrome70', 
        include: /\.vue$/,
        loaders: {
          '.vue': 'js',
        },
      }),
      enforce: 'post',
    },
    typescript2({
      check: false,
      include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.ts", "main.ts", "./node_modules"],
      },
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }, dedupe: ['vue'], preserveSymlinks: false  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/main.ts",
      formats: ["es", "umd"],
      name: "VuePrefeituraPadrao",
      fileName: (format) => (format === "es" ? "index.js" : "index.umd.js"),
    },
    rollupOptions: {
      external: ["vue"],

      output: {
        globals: {
          vue: "Vue"
        },
      },
    },
  },
});