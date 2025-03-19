import { inputBaseStyles } from "@/registry/base/components/input";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

/*
 * This component is based on the `textarea` element and supports all of its props
 */
export const Textarea = ({
  className,
  ...props
}: ComponentProps<"textarea">) => {
  return (
    <textarea
      className={cn(
        inputBaseStyles,
        "txt-small min-h-[60px] w-full px-2 py-1.5",
        className,
      )}
      {...props}
    />
  );
};
