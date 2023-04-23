import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({}), vanillaExtractPlugin({ identifiers: "debug" })],
  build: {
    minify: false,
    cssMinify: false,
  },
  mode: "development",
});
