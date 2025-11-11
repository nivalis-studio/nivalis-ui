import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/classnames';
import type { ComponentProps } from 'react';

const buttonVariants = cva(
  'disabled:fg-disabled inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm transition-colors focus-visible:border-base focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabled disabled:shadow-buttons-neutral disabled:after:hidden [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: cn(
          'after:button-inverted-gradient bg-button-inverted text-contrast-fg-primary shadow-buttons-inverted',
          'hover:after:button-inverted-hover-gradient hover:bg-button-inverted-hover',
          'active:after:button-inverted-pressed-gradient active:bg-button-inverted-pressed',
          'focus-visible:!shadow-buttons-inverted-focus',
        ),
        secondary: cn(
          'after:button-neutral-gradient bg-button-neutral text-fg-base shadow-buttons-neutral',
          'hover:after:button-neutral-hover-gradient hover:bg-button-neutral-hover',
          'active:after:button-neutral-pressed-gradient active:bg-button-neutral-pressed',
          'focus-visible:shadow-buttons-neutral-focus',
        ),
        destructive: cn(
          'after:button-danger-gradient bg-button-danger text-fg-on-color shadow-buttons-colored shadow-buttons-danger',
          'hover:after:button-danger-hover-gradient hover:bg-button-danger-hover',
          'active:after:button-danger-pressed-gradient active:bg-button-danger-pressed',
          'focus-visible:shadow-buttons-danger-focus',
        ),
        outline:
          'border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot='button'
      {...props}
    />
  );
};

export { Button };
