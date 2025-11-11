import { theme } from './theme/_registry';
import { ui } from './ui/_registry';
import type { Registry } from 'shadcn/schema';

export const registry = {
  'name': '@nivalis/ui',
  'homepage': 'https://ui.nivalis.studio',
  items: [...ui, ...theme],
} satisfies Registry;
