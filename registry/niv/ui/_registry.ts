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
  {
    name: 'accordion',
    type: 'registry:ui',
    title: 'Accordion',
    description: 'An accordion component.',
    dependencies: ['@radix-ui/react-accordion'],
    files: [
      {
        path: 'ui/accordion.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'avatar',
    type: 'registry:ui',
    title: 'Avatar',
    description: 'An avatar component.',
    dependencies: ['@radix-ui/react-avatar'],
    files: [
      {
        path: 'ui/avatar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'badge',
    type: 'registry:ui',
    title: 'Badge',
    description: 'A badge component.',
    files: [
      {
        path: 'ui/badge.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
