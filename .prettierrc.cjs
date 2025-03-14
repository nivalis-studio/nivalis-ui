/** @type {import("prettier").Config} */

module.exports = {
  ...require("@nivalis/prettier-config"),
  jsxSingleQuote: false,
  singleQuote: false,
  "tailwindFunctions": ["clsx", "cn"],
  "tailwindConfig": "./tailwind.config.ts",
  "tailwindStylesheet": "./app/styles/globals.css",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
