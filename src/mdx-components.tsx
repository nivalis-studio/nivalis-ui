import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ComponentPreview } from '@/components/component-preview';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...{ ComponentPreview },
    ...components,
  };
}
