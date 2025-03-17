import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card'
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-header'
      className={cn(
        "@container/card-header [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto]",
        className,
      )}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-title'
      className={cn("font-semibold leading-none", className)}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-description'
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

const CardAction = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-action'
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-content'
      className={cn("px-6", className)}
      {...props}
    />
  );
};

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='card-footer'
      className={cn("[.border-t]:pt-6 flex items-center px-6", className)}
      {...props}
    />
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
