/* eslint-disable @typescript-eslint/no-magic-numbers */
"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import * as React from "react";
import { cn } from "@/lib/classnames";

type TooltipProps = {
  readonly content: React.ReactNode;
  readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
  readonly side?: "bottom" | "left" | "top" | "right";
  readonly maxWidth?: number;
} & Omit<RadixTooltip.TooltipContentProps, "content" | "onClick"> &
  Pick<
    RadixTooltip.TooltipProps,
    "open" | "defaultOpen" | "onOpenChange" | "delayDuration"
  >;

/*
 * This component is based on the [Radix UI Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip) primitive.
 * @excludeExternal
 */
const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  /**
   * The maximum width of the tooltip.
   */
  maxWidth = 220,
  className,
  side,
  sideOffset = 8,
  onClick,
  ...props
}: TooltipProps) => {
  return (
    <RadixTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      delayDuration={delayDuration}
      onOpenChange={onOpenChange}
    >
      <RadixTooltip.Trigger asChild onClick={onClick}>
        {children}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          sideOffset={sideOffset}
          align='center'
          className={cn(
            "txt-compact-xsmall text-ui-fg-subtle bg-ui-bg-base shadow-elevation-tooltip rounded-lg px-2.5 py-1",
            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
          style={{ ...props.style, maxWidth }}
        >
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

const TooltipProvider = ({
  children,
  delayDuration = 100,
  skipDelayDuration = 300,
  ...props
}: RadixTooltip.TooltipProviderProps) => {
  return (
    <RadixTooltip.TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      {...props}
    >
      {children}
    </RadixTooltip.TooltipProvider>
  );
};

export { Tooltip, TooltipProvider };
