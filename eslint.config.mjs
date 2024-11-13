import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Disable the rule or set it to warning if needed
      "no-unused-vars": "warn",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
];
