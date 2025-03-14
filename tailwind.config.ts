import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      transitionProperty: {
        fg: "color, background-color, border-color, box-shadow, opacity",
      },
    },
  },
} satisfies Config;

export default config;
