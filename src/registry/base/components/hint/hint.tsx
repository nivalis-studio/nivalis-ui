import { ExclamationCircleSolid } from "@medusajs/icons";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/classnames";
import type { VariantProps } from "class-variance-authority";

const hintVariants = cva("txt-small", {
  variants: {
    variant: {
      info: "text-ui-fg-subtle",
      error: "text-ui-fg-error grid grid-cols-[20px_1fr] gap-1 items-start",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

type HintProps = {} & VariantProps<typeof hintVariants> &
  React.ComponentPropsWithoutRef<"span">;

const Hint = ({
  className,
  /**
   * The hint's style.
   */
  variant = "info",
  children,
  ...props
}: HintProps) => {
  return (
    <span className={cn(hintVariants({ variant }), className)} {...props}>
      {variant === "error" && (
        <div className='flex size-5 items-center justify-center'>
          <ExclamationCircleSolid />
        </div>
      )}
      {children}
    </span>
  );
};

Hint.displayName = "Hint";

export { Hint };
