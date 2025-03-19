import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Spinner } from "@medusajs/icons";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  cn(
    "relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none transition-fg",
    "disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden",
    "after:absolute after:inset-0 after:transition-fg after:content-['']",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "shadow-buttons-inverted text-ui-contrast-fg-primary bg-ui-button-inverted after:button-inverted-gradient",
          "hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient",
          "active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient",
          "focus-visible:!shadow-buttons-inverted-focus",
        ),
        secondary: cn(
          "shadow-buttons-neutral text-ui-fg-base bg-ui-button-neutral after:button-neutral-gradient",
          "hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient",
          "active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient",
          "focus-visible:shadow-buttons-neutral-focus",
        ),
        transparent: cn(
          "after:hidden",
          "text-ui-fg-base bg-ui-button-transparent",
          "hover:bg-ui-button-transparent-hover",
          "active:bg-ui-button-transparent-pressed",
          "focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base",
          "disabled:!bg-transparent disabled:!shadow-none",
        ),
        danger: cn(
          "shadow-buttons-colored shadow-buttons-danger text-ui-fg-on-color bg-ui-button-danger after:button-danger-gradient",
          "hover:bg-ui-button-danger-hover hover:after:button-danger-hover-gradient",
          "active:bg-ui-button-danger-pressed active:after:button-danger-pressed-gradient",
          "focus-visible:shadow-buttons-danger-focus",
        ),
      },
      size: {
        small: "txt-compact-small-plus gap-x-1.5 px-2 py-1",
        base: "txt-compact-small-plus gap-x-1.5 px-3 py-1.5",
        large: "txt-compact-medium-plus gap-x-1.5 px-4 py-2.5",
        xlarge: "txt-compact-large-plus gap-x-1.5 px-5 py-3.5",
      },
    },
    defaultVariants: {
      size: "base",
      variant: "primary",
    },
  },
);

type ButtonProps = {
  readonly isLoading?: boolean;
  // eslint-disable-next-line react/boolean-prop-naming
  readonly asChild?: boolean;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

/*
 * This component is based on the `button` element and supports all of its props
 */
export const Button = ({
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
              "bg-ui-bg-disabled absolute inset-0 flex items-center justify-center rounded-md",
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
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || isLoading}
    >
      {renderInner()}
    </Component>
  );
};
