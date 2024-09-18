import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // { ignores: ["dist"] },
  {
    root: true,
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
        },
      },
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:security/recommended",
      "plugin:react-hooks/recommended",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: [
      "react",
      "@typescript-eslint",
      {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
    ],
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "no-nested-ternary": "off",
      "import/prefer-default-export": "off",
    },
  }
);
