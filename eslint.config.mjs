import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { createConfigItem } from 'eslint';

const parser = createConfigItem('@typescript-eslint/parser', { 
  global: true 
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser
    },
    parser: "@typescript-eslint/parser",
    plugins: [tseslint, pluginReact, pluginJs],      
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    }
  }, 
];
