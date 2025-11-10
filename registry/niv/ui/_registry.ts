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
  {
    name: 'select',
    type: 'registry:ui',
    title: 'Select',
    description: 'A select component.',
    dependencies: ['@radix-ui/react-select'],
    files: [
      {
        path: 'ui/select.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'textarea',
    type: 'registry:ui',
    title: 'Textarea',
    description: 'A textarea component.',
    files: [
      {
        path: 'ui/textarea.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'switch',
    type: 'registry:ui',
    title: 'Switch',
    description: 'A switch component.',
    dependencies: ['@radix-ui/react-switch'],
    files: [
      {
        path: 'ui/switch.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toggle',
    type: 'registry:ui',
    title: 'Toggle',
    description: 'A toggle component.',
    dependencies: ['@radix-ui/react-toggle'],
    files: [
      {
        path: 'ui/toggle.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'slider',
    type: 'registry:ui',
    title: 'Slider',
    description: 'A slider component.',
    dependencies: ['@radix-ui/react-slider'],
    files: [
      {
        path: 'ui/slider.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
