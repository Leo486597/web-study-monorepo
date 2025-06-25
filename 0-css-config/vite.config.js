import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import postcssGlobalNesting from "postcss-global-nested";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    // https://stackoverflow.com/questions/71778929/how-to-setup-postcss-nesting-in-vite
    postcss: {
      plugins: [postcssGlobalNesting],
    },
  },
});
