import {
  CheckCircleSolid,
  CircleDottedLine,
  CircleHalfSolid,
  Plus,
} from "@medusajs/icons";
import * as RadixAccordion from "@radix-ui/react-accordion";
import * as React from "react";
import { cn } from "@/lib/classnames";
import { IconButton } from "../icon-button";

export type ProgressStatus = "not-started" | "in-progress" | "completed";

/*
 * This component is based on the [Radix UI Accordion](https://radix-ui.com/primitives/docs/components/accordion) primitves.
 * @param props
 */
const Root = (props: React.ComponentProps<typeof RadixAccordion.Root>) => {
  return <RadixAccordion.Root {...props} />;
};

Root.displayName = "ProgressAccordion";

const Item = ({
  className,
  ...props
}: React.ComponentProps<typeof RadixAccordion.Item>) => {
  return (
    <RadixAccordion.Item
      className={cn(
        "border-ui-border-base border-b last-of-type:border-b-0",
        className,
      )}
      {...props}
    />
  );
};

Item.displayName = "ProgressAccordion.Item";

type HeaderProps = {
  readonly status?: ProgressStatus;
} & React.ComponentProps<typeof RadixAccordion.Header>;

type StatusIndicatorProps = {
  readonly status: ProgressStatus;
} & React.ComponentProps<"span">;

const ProgressIndicator = ({
  /**
   * The current status.
   */
  status,
  ...props
}: StatusIndicatorProps) => {
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

      default: {
        return CircleDottedLine;
      }
    }
  }, [status]);

  return (
    <span
      className='text-ui-fg-muted group-data-[state=open]:text-ui-fg-interactive flex h-12 w-12 items-center justify-center'
      {...props}
    >
      <Icon />
    </span>
  );
};

ProgressIndicator.displayName = "ProgressAccordion.ProgressIndicator";

const Header = ({
  className,
  /**
   * The current status.
   */
  status = "not-started",
  children,
  ...props
}: HeaderProps) => {
  return (
    <RadixAccordion.Header
      className={cn(
        "h3-core text-ui-fg-base group flex w-full flex-1 items-center gap-4 px-6",
        className,
      )}
      {...props}
    >
      <ProgressIndicator status={status} />
      {children}
      <RadixAccordion.Trigger asChild className='ml-auto'>
        <IconButton variant='transparent'>
          <Plus className='transform transition-transform group-data-[state=open]:rotate-45' />
        </IconButton>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
};

Header.displayName = "ProgressAccordion.Header";

const Content = ({
  className,
  ...props
}: React.ComponentProps<typeof RadixAccordion.Content>) => {
  return (
    <RadixAccordion.Content
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pl-[88px] pr-6",
        className,
      )}
      {...props}
    />
  );
};

Content.displayName = "ProgressAccordion.Content";

const ProgressAccordion = Object.assign(Root, {
  Item,
  Header,
  Content,
});

export { ProgressAccordion };
