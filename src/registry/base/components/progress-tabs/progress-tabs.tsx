"use client";

import {
  CheckCircleSolid,
  CircleDottedLine,
  CircleHalfSolid,
} from "@medusajs/icons";
import * as RadixTabs from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/classnames";
import type { ProgressStatus } from "@/registry/base/components/progress-accordion";

/*
 * This component is based on the [Radix UI Tabs](https://radix-ui.com/primitives/docs/components/tabs) primitves.
 * @param props
 * @excludeExternal
 */
const ProgressTabsRoot = (props: RadixTabs.TabsProps) => {
  return <RadixTabs.Root {...props} />;
};

ProgressTabsRoot.displayName = "ProgressTabs";

type IndicatorProps = {
  /**
   * The current status.
   */
  readonly status?: ProgressStatus;
} & Omit<React.ComponentPropsWithoutRef<"span">, "children">;

const ProgressIndicator = ({ status, className, ...props }: IndicatorProps) => {
  const Icon = React.useMemo(() => {
    switch (status) {
      case "not-started": {
        return CircleDottedLine;
      }

      case "in-progress": {
        return CircleHalfSolid;
      }

      case "completed": {
        return CheckCircleSolid;
      }

      case undefined: {
        return CircleDottedLine;
      }

      default: {
        return CircleDottedLine;
      }
    }
  }, [status]);

  return (
    <span
      className={cn(
        "text-ui-fg-muted group-data-[state=active]/trigger:text-ui-fg-interactive",
        className,
      )}
      {...props}
    >
      <Icon />
    </span>
  );
};

ProgressIndicator.displayName = "ProgressTabs.ProgressIndicator";

type ProgressTabsTriggerProps = {
  readonly status?: ProgressStatus;
} & Omit<React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>, "asChild">;

const ProgressTabsTrigger = ({
  className,
  children,
  status = "not-started",
  ...props
}: ProgressTabsTriggerProps) => (
  <RadixTabs.Trigger
    className={cn(
      "txt-compact-small-plus text-ui-fg-muted bg-ui-bg-subtle border-r-ui-border-base inline-flex h-[52px] w-full max-w-[200px] flex-1 items-center gap-x-2 border-r px-4 text-left outline-none transition-fg",
      "group/trigger overflow-hidden text-ellipsis whitespace-nowrap",
      "disabled:bg-ui-bg-disabled disabled:text-ui-fg-muted",
      "hover:bg-ui-bg-subtle-hover",
      "focus-visible:bg-ui-bg-base focus:z-[1]",
      "data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base",
      className,
    )}
    {...props}
  >
    <ProgressIndicator status={status} />
    {children}
  </RadixTabs.Trigger>
);

ProgressTabsTrigger.displayName = "ProgressTabs.Trigger";

const ProgressTabsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.List>) => (
  <RadixTabs.List className={cn("flex items-center", className)} {...props} />
);

ProgressTabsList.displayName = "ProgressTabs.List";

const ProgressTabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof RadixTabs.Content>) => {
  return (
    <RadixTabs.Content className={cn("outline-none", className)} {...props} />
  );
};

ProgressTabsContent.displayName = "ProgressTabs.Content";

const ProgressTabs = Object.assign(ProgressTabsRoot, {
  Trigger: ProgressTabsTrigger,
  List: ProgressTabsList,
  Content: ProgressTabsContent,
});

export { ProgressTabs };
