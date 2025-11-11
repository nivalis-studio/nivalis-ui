import fs from 'node:fs/promises';
import { converter, formatCss } from 'culori';
import { colors } from '@/registry/niv/theme/colors';

const oklch = converter('oklch');

// Hack to avoid ,999999 because of float bug implementation
export function clean(value: number, precision = 4): number {
  const k = 10 ** precision;
  return Math.round(Number.parseFloat((value * k).toFixed(precision))) / k;
}

const rgbaToOklch = (rgba: string) => {
  const color = oklch(rgba);

  if (!color) {
    return formatCss(color);
  }

  color.l = clean(color.l);
  color.c = clean(color.c);
  color.h = color.h ? clean(color.h) : color.h;

  return formatCss(color);
};

await fs.writeFile(
  './registry/niv/theme/colors.ts',
  `
    export const colors =
      ${JSON.stringify(
        {
          light: Object.fromEntries(
            Object.entries(colors.light)
              .map(([key, value]) => ({
                name: key,
                color: rgbaToOklch(value),
              }))
              .map(({ name, color }) => [name, color]),
          ),
          dark: Object.fromEntries(
            Object.entries(colors.dark)
              .map(([key, value]) => ({
                name: key,
                color: rgbaToOklch(value),
              }))
              .map(({ name, color }) => [name, color]),
          ),
        },
        null,
        2,
      )}
    ;
  `,
);
