import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      // "eslint-plugin-airbnb-styling",
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
          arrowFunctions: true,
          classes: true,
          modules: true,
          defaultParams: true,
        },
        sourceType: "module",
      },
    },
    // plugins: ["react"],
    // parser: "babel-eslint",
    rules: {
      "no-unused-vars": ["off", { varsIgnorePattern: "^[A-Z_]" }],
      // "no-undef": "error",
      // https://eslint.org/docs/latest/rules/no-use-before-define
      "no-use-before-define": [
        "error",
        {
          functions: true,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
    },
  },
]);
