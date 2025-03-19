"use client";

import React from "react";
import { Copy } from "@/registry/base/components/copy";
import { cn } from "@/lib/classnames";

/*
 * This component is based on the div element and supports all of its props
 */
export const CommandComponent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "bg-ui-contrast-bg-base shadow-elevation-code-block flex items-center rounded-lg px-4 py-1.5",
        "[&>code]:text-ui-contrast-fg-primary [&>code]:code-body [&>code]:mx-2",
        className,
      )}
      {...props}
    />
  );
};

export const CommandCopy = ({
  className,
  ...props
}: React.ComponentProps<typeof Copy>) => {
  return (
    <Copy
      {...props}
      className={cn("!text-ui-contrast-fg-secondary ml-auto", className)}
    />
  );
};

CommandCopy.displayName = "Command.Copy";

const Command = Object.assign(CommandComponent, { Copy: CommandCopy });

export { Command };
