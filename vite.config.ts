import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/build.ts"),
      name: "react-naver-test",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        //   "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    // emptyOutDir: true,
  },
  plugins: [react(), dts()],
});