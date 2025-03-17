"use client";

import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

const ContextMenu = ({ ...props }: ComponentProps<typeof Root>) => {
  return <Root data-slot='context-menu' {...props} />;
};

const ContextMenuTrigger = ({ ...props }: ComponentProps<typeof Trigger>) => {
  return <Trigger data-slot='context-menu-trigger' {...props} />;
};

const ContextMenuGroup = ({ ...props }: ComponentProps<typeof Group>) => {
  return <Group data-slot='context-menu-group' {...props} />;
};

const ContextMenuPortal = ({ ...props }: ComponentProps<typeof Portal>) => {
  return <Portal data-slot='context-menu-portal' {...props} />;
};

const ContextMenuSub = ({ ...props }: ComponentProps<typeof Sub>) => {
  return <Sub data-slot='context-menu-sub' {...props} />;
};

const ContextMenuRadioGroup = ({
  ...props
}: ComponentProps<typeof RadioGroup>) => {
  return <RadioGroup data-slot='context-menu-radio-group' {...props} />;
};

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof SubTrigger> & {
  readonly inset?: boolean;
}) => {
  return (
    <SubTrigger
      data-slot='context-menu-sub-trigger'
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground outline-hidden flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className='ml-auto' />
    </SubTrigger>
  );
};

const ContextMenuSubContent = ({
  className,
  ...props
}: ComponentProps<typeof SubContent>) => {
  return (
    <SubContent
      data-slot='context-menu-sub-content'
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className,
      )}
      {...props}
    />
  );
};

const ContextMenuContent = ({
  className,
  ...props
}: ComponentProps<typeof Content>) => {
  return (
    <Portal>
      <Content
        data-slot='context-menu-content'
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-(--radix-context-menu-content-available-height) z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md",
          className,
        )}
        {...props}
      />
    </Portal>
  );
};

const ContextMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: ComponentProps<typeof Item> & {
  readonly inset?: boolean;
  readonly variant?: "default" | "destructive";
}) => {
  return (
    <Item
      data-slot='context-menu-item'
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
};

const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: ComponentProps<typeof CheckboxItem>) => {
  return (
    <CheckboxItem
      data-slot='context-menu-checkbox-item'
      checked={checked}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
        <ItemIndicator>
          <CheckIcon className='size-4' />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  );
};

const ContextMenuRadioItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof RadioItem>) => {
  return (
    <RadioItem
      data-slot='context-menu-radio-item'
      className={cn(
        "focus:bg-accent focus:text-accent-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
        <ItemIndicator>
          <CircleIcon className='size-2 fill-current' />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  );
};

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof Label> & {
  readonly inset?: boolean;
}) => {
  return (
    <Label
      data-slot='context-menu-label'
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
};

const ContextMenuSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Separator>) => {
  return (
    <Separator
      data-slot='context-menu-separator'
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};

const ContextMenuShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  return (
    <span
      data-slot='context-menu-shortcut'
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
};

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
