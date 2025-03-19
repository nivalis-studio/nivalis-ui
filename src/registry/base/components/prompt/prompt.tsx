"use client";

import { AlertDialog as RadixAlertDialog } from "@radix-ui/react-alert-dialog";
import { createContext, forwardRef, useContext } from "react";
import { Button } from "@/registry/base/components/button";
import { cn } from "@/lib/classnames";
import { Heading } from "@/registry/base/components/heading";
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type PromptVariant = "danger" | "confirmation";

const PromptContext = createContext<{ variant: PromptVariant }>({
  variant: "danger",
});

const usePromptContext = () => {
  const context = useContext(PromptContext);

  if (!context) {
    throw new Error("usePromptContext must be used within a PromptProvider");
  }

  return context;
};

type PromptProviderProps = PropsWithChildren<{
  readonly variant: PromptVariant;
}>;

const PromptProvider = ({ variant, children }: PromptProviderProps) => {
  return (
    <PromptContext.Provider value={{ variant }}>
      {children}
    </PromptContext.Provider>
  );
};

/**
 * This component is based on the [Radix UI Alert Dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog) primitives.
 * @param root0
 * @param root0.variant
 */
const Root = ({
  /**
   * The variant of the prompt.
   */
  variant = "danger",
  ...props
}: ComponentPropsWithoutRef<typeof RadixAlertDialog.Root> & {
  readonly variant?: PromptVariant;
}) => {
  return (
    <PromptProvider variant={variant}>
      <RadixAlertDialog.Root {...props} />
    </PromptProvider>
  );
};

Root.displayName = "Prompt";

const Trigger = RadixAlertDialog.Trigger;

Trigger.displayName = "Prompt.Trigger";

const Portal = (props: RadixAlertDialog.AlertDialogPortalProps) => {
  return <RadixAlertDialog.AlertDialogPortal {...props} />;
};

Portal.displayName = "Prompt.Portal";

const Overlay = forwardRef<
  ElementRef<typeof RadixAlertDialog.Overlay>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <RadixAlertDialog.Overlay
      ref={ref}
      className={cn(
        "bg-ui-bg-overlay fixed inset-0",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
});

Overlay.displayName = "Prompt.Overlay";

const Title = ({
  className,
  children,
  ...props
}: Omit<ComponentProps<typeof RadixAlertDialog.Title>, "asChild">) => {
  return (
    <RadixAlertDialog.Title className={cn(className)} {...props} asChild>
      <Heading level='h2' className='text-ui-fg-base'>
        {children}
      </Heading>
    </RadixAlertDialog.Title>
  );
};

Title.displayName = "Prompt.Title";

const Content = forwardRef<
  ElementRef<typeof RadixAlertDialog.Content>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Content>
>(({ className, ...props }, ref) => {
  return (
    <Portal>
      <Overlay />
      <RadixAlertDialog.Content
        ref={ref}
        className={cn(
          "bg-ui-bg-base shadow-elevation-flyout fixed left-[50%] top-[50%] flex w-full max-w-[400px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border focus-visible:outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",
          className,
        )}
        {...props}
      />
    </Portal>
  );
});

Content.displayName = "Prompt.Content";

const Description = forwardRef<
  ElementRef<typeof RadixAlertDialog.Description>,
  ComponentPropsWithoutRef<typeof RadixAlertDialog.Description>
>(({ className, ...props }, ref) => {
  return (
    <RadixAlertDialog.Description
      ref={ref}
      className={cn("text-ui-fg-subtle txt-compact-medium", className)}
      {...props}
    />
  );
});

Description.displayName = "Prompt.Description";

const Action = forwardRef<
  ElementRef<typeof RadixAlertDialog.Action>,
  Omit<ComponentPropsWithoutRef<typeof RadixAlertDialog.Action>, "asChild">
>(({ className, children, type, ...props }, ref) => {
  const { variant } = usePromptContext();

  return (
    <RadixAlertDialog.Action ref={ref} className={className} {...props} asChild>
      <Button
        size='small'
        type={type}
        variant={variant === "danger" ? "danger" : "primary"}
      >
        {children}
      </Button>
    </RadixAlertDialog.Action>
  );
});

Action.displayName = "Prompt.Action";

const Cancel = forwardRef<
  ElementRef<typeof RadixAlertDialog.Cancel>,
  Omit<ComponentPropsWithoutRef<typeof RadixAlertDialog.Cancel>, "asChild">
>(({ className, children, ...props }, ref) => {
  return (
    <RadixAlertDialog.Cancel
      ref={ref}
      className={cn(className)}
      {...props}
      asChild
    >
      <Button size='small' variant='secondary'>
        {children}
      </Button>
    </RadixAlertDialog.Cancel>
  );
});

Cancel.displayName = "Prompt.Cancel";

/**
 * This component is based on the `div` element and supports all of its props
 * @param root0
 * @param root0.className
 */
const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex flex-col gap-y-1 px-6 pt-6", className)}
      {...props}
    />
  );
};

Header.displayName = "Prompt.Header";

/**
 * This component is based on the `div` element and supports all of its props
 * @param root0
 * @param root0.className
 */
const Footer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex items-center justify-end gap-x-2 p-6", className)}
      {...props}
    />
  );
};

Footer.displayName = "Prompt.Footer";

const Prompt = Object.assign(Root, {
  Trigger,
  Content,
  Title,
  Description,
  Action,
  Cancel,
  Header,
  Footer,
});

export { Prompt };
