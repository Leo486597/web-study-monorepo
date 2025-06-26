import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[folder]_[name]_[local]_[hash:base64:10]",
      scopeBehaviour: "global",
    },
  },
});
