"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Spinner } from "@medusajs/icons";
import { cn } from "@/lib/classnames";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  cn(
    "relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none transition-fg",
    "disabled:bg-bg-disabled disabled:border-border-base disabled:text-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden",
    "after:absolute after:inset-0 after:transition-fg after:content-['']",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "shadow-buttons-inverted text-contrast-fg-primary bg-button-inverted after:button-inverted-gradient",
          "hover:bg-button-inverted-hover hover:after:button-inverted-hover-gradient",
          "active:bg-button-inverted-pressed active:after:button-inverted-pressed-gradient",
          "focus-visible:!shadow-buttons-inverted-focus",
        ),
        secondary: cn(
          "shadow-buttons-neutral text-fg-base bg-button-neutral after:button-neutral-gradient",
          "hover:bg-button-neutral-hover hover:after:button-neutral-hover-gradient",
          "active:bg-button-neutral-pressed active:after:button-neutral-pressed-gradient",
          "focus-visible:shadow-buttons-neutral-focus",
        ),
        transparent: cn(
          "after:hidden",
          "text-fg-base bg-button-transparent",
          "hover:bg-button-transparent-hover",
          "active:bg-button-transparent-pressed",
          "focus-visible:shadow-buttons-neutral-focus focus-visible:bg-bg-base",
          "disabled:!bg-transparent disabled:!shadow-none",
        ),
        danger: cn(
          "shadow-buttons-colored shadow-buttons-danger text-fg-on-color bg-button-danger after:button-danger-gradient",
          "hover:bg-button-danger-hover hover:after:button-danger-hover-gradient",
          "active:bg-button-danger-pressed active:after:button-danger-pressed-gradient",
          "focus-visible:shadow-buttons-danger-focus",
        ),
      },
      size: {
        sm: "txt-compact-small-plus gap-x-1.5 px-2 py-1",
        base: "txt-compact-small-plus gap-x-1.5 px-3 py-1.5",
        lg: "txt-compact-medium-plus gap-x-1.5 px-4 py-2.5",
        xl: "txt-compact-large-plus gap-x-1.5 px-5 py-3.5",
        icon: "size-8 p-1.5",
      },
    },
    defaultVariants: {
      size: "base",
      variant: "primary",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    readonly isLoading?: boolean;
    // eslint-disable-next-line react/boolean-prop-naming
    readonly asChild?: boolean;
  };

/*
 * This component is based on the `button` element and supports all of its props
 */
const Button = ({
  /**
   * The button's style.
   */
  variant = "primary",
  /**
   * The button's size.
   */
  size = "base",
  className,
  /**
   * Whether to remove the wrapper `button` element and use the
   * passed child element instead.
   */
  asChild = false,
  children,
  /**
   * Whether to show a loading spinner.
   */
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  /*
   * In the case of a button where asChild is true, and isLoading is true, we ensure that
   * only on element is passed as a child to the Slot component. This is because the Slot
   * component only accepts a single child.
   */
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  const renderInner = () => {
    if (isLoading) {
      return (
        <span className='pointer-events-none'>
          <div
            className={cn(
              "bg-bg-disabled absolute inset-0 flex items-center justify-center rounded-md",
            )}
          >
            <Spinner className='animate-spin' />
          </div>
          {children}
        </span>
      );
    }

    return children;
  };

  return (
    <Component
      {...props}
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled ?? isLoading}
    >
      {renderInner()}
    </Component>
  );
};

export { Button, buttonVariants };
