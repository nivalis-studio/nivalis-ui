"use client";

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

const Dialog = ({ ...props }: ComponentProps<typeof Root>) => {
  return <Root data-slot='dialog' {...props} />;
};

const DialogTrigger = ({ ...props }: ComponentProps<typeof Trigger>) => {
  return <Trigger data-slot='dialog-trigger' {...props} />;
};

const DialogPortal = ({ ...props }: ComponentProps<typeof Portal>) => {
  return <Portal data-slot='dialog-portal' {...props} />;
};

const DialogClose = ({ ...props }: ComponentProps<typeof Close>) => {
  return <Close data-slot='dialog-close' {...props} />;
};

const DialogOverlay = ({
  className,
  ...props
}: ComponentProps<typeof Overlay>) => {
  return (
    <Overlay
      data-slot='dialog-overlay'
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
};

const DialogContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Content>) => {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />
      <Content
        data-slot='dialog-content'
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}
      >
        {children}
        <Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground rounded-xs focus:outline-hidden absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <XIcon />
          <span className='sr-only'>Close</span>
        </Close>
      </Content>
    </DialogPortal>
  );
};

const DialogHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='dialog-header'
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
};

const DialogFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot='dialog-footer'
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
};

const DialogTitle = ({ className, ...props }: ComponentProps<typeof Title>) => {
  return (
    <Title
      data-slot='dialog-title'
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  );
};

const DialogDescription = ({
  className,
  ...props
}: ComponentProps<typeof Description>) => {
  return (
    <Description
      data-slot='dialog-description'
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
