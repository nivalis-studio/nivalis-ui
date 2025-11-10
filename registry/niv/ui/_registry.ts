import type { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    description: 'A button component.',
    dependencies: ['@radix-ui/react-slot'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
