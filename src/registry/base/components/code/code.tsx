import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

/*
 * This component is based on the `code` element and supports all of its props
 */
export const Code = ({ className, ...props }: ComponentProps<"code">) => {
  return (
    <code
      className={cn(
        "border-ui-tag-neutral-border bg-ui-tag-neutral-bg text-ui-tag-neutral-text txt-compact-small inline-flex rounded-md border px-[6px] font-mono",
        className,
      )}
      {...props}
    />
  );
};
