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
  {
    name: 'checkbox',
    type: 'registry:ui',
    title: 'Checkbox',
    description: 'A checkbox component.',
    dependencies: ['@radix-ui/react-checkbox'],
    files: [
      {
        path: 'ui/checkbox.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'dialog',
    type: 'registry:ui',
    title: 'Dialog',
    description: 'A dialog component.',
    dependencies: ['@radix-ui/react-dialog'],
    files: [
      {
        path: 'ui/dialog.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'command',
    type: 'registry:ui',
    title: 'Command',
    description: 'A command component.',
    dependencies: ['@radix-ui/react-dialog', 'cmdk'],
    files: [
      {
        path: 'ui/dialog.tsx',
        type: 'registry:ui',
      },
      {
        path: 'ui/command.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'label',
    type: 'registry:ui',
    title: 'Label',
    description: 'A label component.',
    dependencies: ['@radix-ui/react-label'],
    files: [
      {
        path: 'ui/label.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
