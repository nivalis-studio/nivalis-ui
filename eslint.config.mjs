import { nivalis } from "@nivalis/eslint-config";

export default nivalis(
  {
    ignores: ["storybook-static"],
    tailwindcss: false,
    prettier: {
      singleQuote: false,
      jsxSingleQuote: false,
    },
    rules: {
      "no-restricted-syntax": "off",
    },
  },
  {
    files: ["**/*.stories.*"],
    rules: {
      "import/no-anonymous-default-export": "off",
      "import/no-default-export": "off",
    },
  },
);
