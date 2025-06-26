import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    modules: {
      generateScopedName: "[folder]_[name]_[local]_[hash:base64:10]",
      scopeBehaviour: "global",
    },
  },
});
