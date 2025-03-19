import * as RadixPopover from "@radix-ui/react-popover";
import * as React from "react";
import { cn } from "@/lib/classnames";

/*
 * This component is based on the [Radix UI Popover](https://www.radix-ui.com/primitives/docs/components/popover) primitves.
 */
const Root = (
  props: React.ComponentPropsWithoutRef<typeof RadixPopover.Root>,
) => {
  return <RadixPopover.Root {...props} />;
};

Root.displayName = "Popover";

const Trigger = (props: React.ComponentProps<typeof RadixPopover.Trigger>) => {
  return <RadixPopover.Trigger {...props} />;
};

Trigger.displayName = "Popover.Trigger";

const Anchor = (
  props: React.ComponentPropsWithoutRef<typeof RadixPopover.Anchor>,
) => {
  return <RadixPopover.Anchor {...props} />;
};

Anchor.displayName = "Popover.Anchor";

const Close = (
  props: React.ComponentPropsWithoutRef<typeof RadixPopover.Close>,
) => {
  return <RadixPopover.Close {...props} />;
};

Close.displayName = "Popover.Close";

type ContentProps = {} & React.ComponentPropsWithoutRef<
  typeof RadixPopover.Content
>;

/*
 * @excludeExternal
 */
const Content = ({
  className,
  /**
   * The distance in pixels from the anchor.
   */
  sideOffset = 8,
  /**
   * The preferred side of the anchor to render against when open.
   * Will be reversed when collisions occur and `avoidCollisions` is enabled.
   */
  side = "bottom",
  /**
   * The preferred alignment against the anchor. May change when collisions occur.
   */
  align = "start",
  collisionPadding,
  ...props
}: ContentProps) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        sideOffset={sideOffset}
        side={side}
        align={align}
        collisionPadding={collisionPadding}
        className={cn(
          "bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg p-1",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </RadixPopover.Portal>
  );
};

Content.displayName = "Popover.Content";

const Seperator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("bg-ui-border-base -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};

Seperator.displayName = "Popover.Seperator";

const Popover = Object.assign(Root, {
  Trigger,
  Anchor,
  Close,
  Content,
  Seperator,
});

export { Popover };
