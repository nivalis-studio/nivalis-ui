import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    size: {
      xsmall: "",
      small: "",
      base: "",
      large: "",
      xlarge: "",
    },
    weight: {
      regular: "font-normal",
      plus: "font-medium",
    },
    family: {
      sans: "font-sans",
      mono: "font-mono",
    },
    leading: {
      normal: "",
      compact: "",
    },
  },
  defaultVariants: {
    family: "sans",
    size: "base",
    weight: "regular",
    leading: "normal",
  },
  compoundVariants: [
    {
      size: "xsmall",
      leading: "normal",
      className: "txt-xsmall",
    },
    {
      size: "xsmall",
      leading: "compact",
      className: "txt-compact-xsmall",
    },
    {
      size: "small",
      leading: "normal",
      className: "txt-small",
    },
    {
      size: "small",
      leading: "compact",
      className: "txt-compact-small",
    },
    {
      size: "base",
      leading: "normal",
      className: "txt-medium",
    },
    {
      size: "base",
      leading: "compact",
      className: "txt-compact-medium",
    },
    {
      size: "large",
      leading: "normal",
      className: "txt-large",
    },
    {
      size: "large",
      leading: "compact",
      className: "txt-compact-large",
    },
    {
      size: "xlarge",
      leading: "normal",
      className: "txt-xlarge",
    },
    {
      size: "xlarge",
      leading: "compact",
      className: "txt-compact-xlarge",
    },
  ],
});

export type TextProps = {
  // eslint-disable-next-line react/boolean-prop-naming
  readonly asChild?: boolean;
  readonly as?: "p" | "span" | "div";
} & ComponentProps<"p"> &
  VariantProps<typeof textVariants>;

/*
 * This component is based on the `p` element and supports all of its props
 */
export const Text = ({
  className,
  /**
   * Whether to remove the wrapper `button` element and use the
   * passed child element instead.
   */
  asChild = false,
  /**
   * The wrapper element to use when `asChild` is disabled.
   */
  as = "p",
  /**
   * The text's size.
   */
  size = "base",
  /**
   * The text's font weight.
   */
  weight = "regular",
  /**
   * The text's font family.
   */
  family = "sans",
  /**
   * The text's line height.
   */
  leading = "normal",
  children,
  ...props
}: TextProps) => {
  const Component = asChild ? Slot : as;

  return (
    <Component
      className={cn(textVariants({ size, weight, family, leading }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
