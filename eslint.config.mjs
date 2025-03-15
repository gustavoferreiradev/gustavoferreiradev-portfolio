import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    parser: "@typescript-eslint/parser", // Define o parser do TypeScript
    plugins: [tseslint, pluginReact],      // Adiciona o plugin do TypeScript
    rules: {
      "react/react-in-jsx-scope": "off", // Desabilitar a regra react/react-in-jsx-scope
      "react/jsx-uses-react": "off",    // Desabilitar a regra react/jsx-uses-react
    }
  }, 
];
