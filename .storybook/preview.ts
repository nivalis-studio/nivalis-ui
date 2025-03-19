import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles/globals.css";
import type { Preview } from "@storybook/react";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Light: "light",
      Dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default preview;
