import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

/*
 * This component is based on the `div` element and supports all of its props
 */
export const Container = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "shadow-elevation-card-rest bg-ui-bg-base w-full rounded-lg px-6 py-4",
        className,
      )}
      {...props}
    />
  );
};
