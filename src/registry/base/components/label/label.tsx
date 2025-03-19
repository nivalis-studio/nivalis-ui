"use client";

import { cva } from "class-variance-authority";
import * as RadixLabel from "@radix-ui/react-label";
import * as React from "react";
import { cn } from "@/lib/classnames";
import type { VariantProps } from "class-variance-authority";

const labelVariants = cva("font-sans", {
  variants: {
    size: {
      xsmall: "txt-compact-xsmall",
      small: "txt-compact-small",
      base: "txt-compact-medium",
      large: "txt-compact-large",
    },
    weight: {
      regular: "font-normal",
      plus: "font-medium",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "regular",
  },
});

type LabelProps = {} & React.ComponentPropsWithoutRef<"label"> &
  VariantProps<typeof labelVariants>;

/*
 * This component is based on the [Radix UI Label](https://www.radix-ui.com/primitives/docs/components/label) primitive.
 */
const Label = ({
  className,
  /**
   * The label's size.
   */
  size = "base",
  /**
   * The label's font weight.
   */
  weight = "regular",
  ...props
}: LabelProps) => {
  return (
    <RadixLabel.Root
      className={cn(labelVariants({ size, weight }), className)}
      {...props}
    />
  );
};

Label.displayName = "Label";

export { Label };
