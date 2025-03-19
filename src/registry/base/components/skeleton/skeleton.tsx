import { cn } from "@/lib/classnames";
import type { HTMLAttributes } from "react";

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("bg-ui-bg-component animate-pulse rounded-md", className)}
      {...props}
    />
  );
};
