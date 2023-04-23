import { defineConfig } from "vite";
import { resolve } from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({}), vanillaExtractPlugin({ identifiers: "debug" })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es", "cjs"],
      name: "BoxThing",
      // the proper extensions will be added
      fileName: "box-thing",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
    },
    minify: false,
    cssMinify: false,
  },
  mode: "development",
});
