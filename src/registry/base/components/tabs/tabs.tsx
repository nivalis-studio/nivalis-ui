"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

/*
 * This component is based on the [Radix UI Tabs](https://radix-ui.com/primitives/docs/components/tabs) primitves
 * @param props
 */
const TabsRoot = (props: ComponentProps<typeof RadixTabs.Root>) => {
  return <RadixTabs.Root {...props} />;
};

TabsRoot.displayName = "Tabs";

const TabsTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof RadixTabs.Trigger>) => (
  <RadixTabs.Trigger
    className={cn(
      "txt-compact-small-plus text-ui-fg-subtle inline-flex items-center justify-center rounded-full border border-transparent bg-transparent px-2.5 py-1 outline-none transition-fg",
      "hover:text-ui-fg-base",
      "focus-visible:border-ui-border-interactive focus-visible:!shadow-borders-focus focus-visible:bg-ui-bg-base",
      "data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base data-[state=active]:shadow-elevation-card-rest",
      className,
    )}
    {...props}
  >
    {children}
  </RadixTabs.Trigger>
);

TabsTrigger.displayName = "Tabs.Trigger";

const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof RadixTabs.List>) => (
  <RadixTabs.List
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
);

TabsList.displayName = "Tabs.List";

const TabsContent = ({
  className,
  ...props
}: ComponentProps<typeof RadixTabs.Content>) => (
  <RadixTabs.Content className={cn("outline-none", className)} {...props} />
);

TabsContent.displayName = "Tabs.Content";

const Tabs = Object.assign(TabsRoot, {
  Trigger: TabsTrigger,
  List: TabsList,
  Content: TabsContent,
});

export { Tabs };
