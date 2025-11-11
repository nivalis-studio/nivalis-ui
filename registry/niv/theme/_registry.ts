import { colors } from './colors';
import { effects } from './effects';
import type { Registry } from 'shadcn/schema';

export const theme: Registry['items'] = [
  {
    name: 'theme:medusa',
    type: 'registry:style',
    css: {
      ':root': {
        '--radius': '0.625rem',
        '--ease-in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      '@layer base': {
        'html, body, #__next': {
          color: 'var(--color-fg-base)',
          'border-color': 'var(--color-border-base)',
          'background-color': 'var(--color-bg-base)',
        },
      },
    },
    cssVars: {
      dark: {
        ...colors.dark,
        ...effects.dark,
      },
      light: {
        ...colors.light,
        ...effects.light,
      },
    },
  },
];
