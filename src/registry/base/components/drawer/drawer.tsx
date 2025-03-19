"use client";

import { XMark } from "@medusajs/icons";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as React from "react";
import { IconButton } from "@/registry/base/components/icon-button";
import { Kbd } from "@/registry/base/components/kbd";
import { Text } from "@/registry/base/components/text";
import { cn } from "@/lib/classnames";

type DrawerRootProps = {} & React.ComponentPropsWithoutRef<
  typeof RadixDialog.Root
>;

/*
 * This component is based on the [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) primitives.
 */
const DrawerRoot = (props: DrawerRootProps) => {
  return <RadixDialog.Root {...props} />;
};

DrawerRoot.displayName = "Drawer";

type DrawerTriggerProps = {} & React.ComponentPropsWithoutRef<
  typeof RadixDialog.Trigger
>;

/*
 * This component is used to create the trigger button that opens the drawer.
 * It accepts props from the [Radix UI Dialog Trigger](https://www.radix-ui.com/primitives/docs/components/dialog#trigger) component.
 */
const DrawerTrigger = ({ className, ...props }: DrawerTriggerProps) => {
  return <RadixDialog.Trigger className={cn(className)} {...props} />;
};

DrawerTrigger.displayName = "Drawer.Trigger";

type DrawerCloseProps = {} & React.ComponentPropsWithoutRef<
  typeof RadixDialog.Close
>;

/*
 * This component is used to create the close button for the drawer.
 * It accepts props from the [Radix UI Dialog Close](https://www.radix-ui.com/primitives/docs/components/dialog#close) component.
 */
const DrawerClose = ({ className, ...props }: DrawerCloseProps) => {
  return <RadixDialog.Close className={cn(className)} {...props} />;
};

DrawerClose.displayName = "Drawer.Close";

type DrawerPortalProps = {} & RadixDialog.DialogPortalProps;

/*
 * The `Drawer.Content` component uses this component to wrap the drawer content.
 * It accepts props from the [Radix UI Dialog Portal](https://www.radix-ui.com/primitives/docs/components/dialog#portal) component.
 */
const DrawerPortal = (props: DrawerPortalProps) => {
  return <RadixDialog.DialogPortal {...props} />;
};

DrawerPortal.displayName = "Drawer.Portal";

type DrawerOverlayProps = {} & React.ComponentPropsWithoutRef<
  typeof RadixDialog.Overlay
>;

/*
 * This component is used to create the overlay for the drawer.
 * It accepts props from the [Radix UI Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay) component.
 */
const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => {
  return (
    <RadixDialog.Overlay
      className={cn(
        "bg-ui-bg-overlay fixed inset-0",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
};

DrawerOverlay.displayName = "Drawer.Overlay";

type DrawerContentProps = {
  /**
   * Props for the overlay component.
   * It accepts props from the [Radix UI Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay) component.
   */
  readonly overlayProps?: React.ComponentPropsWithoutRef<typeof DrawerOverlay>;
  /**
   * Props for the portal component that wraps the drawer content.
   * It accepts props from the [Radix UI Dialog Portal](https://www.radix-ui.com/primitives/docs/components/dialog#portal) component.
   */
  readonly portalProps?: React.ComponentPropsWithoutRef<typeof DrawerPortal>;
} & React.ComponentPropsWithoutRef<typeof RadixDialog.Content>;

/**
 * This component wraps the content of the drawer.
 * It accepts props from the [Radix UI Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content) component.
 * @param root0
 * @param root0.className
 * @param root0.overlayProps
 * @param root0.portalProps
 */
const DrawerContent = ({
  className,
  overlayProps,
  portalProps,
  ...props
}: DrawerContentProps) => {
  return (
    <DrawerPortal {...portalProps}>
      <DrawerOverlay {...overlayProps} />
      <RadixDialog.Content
        className={cn(
          "bg-ui-bg-base shadow-elevation-modal border-ui-border-base fixed inset-y-2 flex w-full flex-1 flex-col rounded-lg border outline-none max-sm:inset-x-2 max-sm:w-[calc(100%-16px)] sm:right-2 sm:max-w-[560px]",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 duration-200",
          className,
        )}
        {...props}
      />
    </DrawerPortal>
  );
};

DrawerContent.displayName = "Drawer.Content";

type DrawerHeaderProps = {} & React.ComponentPropsWithoutRef<"div">;

/*
 * This component is used to wrap the header content of the drawer.
 * This component is based on the `div` element and supports all of its props.
 */
const DrawerHeader = ({ children, className, ...props }: DrawerHeaderProps) => {
  return (
    <div
      className='border-ui-border-base flex items-start justify-between gap-x-4 border-b px-6 py-4'
      {...props}
    >
      <div className={cn("flex flex-col gap-y-1", className)}>{children}</div>
      <div className='flex items-center gap-x-2'>
        <Kbd>esc</Kbd>
        <RadixDialog.Close asChild>
          <IconButton size='small' type='button' variant='transparent'>
            <XMark />
          </IconButton>
        </RadixDialog.Close>
      </div>
    </div>
  );
};

DrawerHeader.displayName = "Drawer.Header";

type DrawerBodyProps = {} & React.ComponentPropsWithoutRef<"div">;

/**
 * This component is used to wrap the body content of the drawer.
 * This component is based on the `div` element and supports all of its props
 */
const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, ...props }: DrawerBodyProps, ref) => {
    return (
      <div ref={ref} className={cn("flex-1 px-6 py-4", className)} {...props} />
    );
  },
);

DrawerBody.displayName = "Drawer.Body";

type DrawerFooterProps = {} & React.HTMLAttributes<HTMLDivElement>;

/*
 * This component is used to wrap the footer content of the drawer.
 * This component is based on the `div` element and supports all of its props.
 */
const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => {
  return (
    <div
      className={cn(
        "border-ui-border-base flex items-center justify-end space-x-2 overflow-y-auto border-t px-6 py-4",
        className,
      )}
      {...props}
    />
  );
};

DrawerFooter.displayName = "Drawer.Footer";

/**
 * This component adds an accessible title to the drawer.
 * It accepts props from the [Radix UI Dialog Title](https://www.radix-ui.com/primitives/docs/components/dialog#title) component.
 */
const DrawerTitle = RadixDialog.Title;

DrawerTitle.displayName = "Drawer.Title";

type DrawerDescriptionProps = {} & React.ComponentPropsWithoutRef<
  typeof RadixDialog.Description
>;

/*
 * This component adds accessible description to the drawer.
 * It accepts props from the [Radix UI Dialog Description](https://www.radix-ui.com/primitives/docs/components/dialog#description) component.
 */
const DrawerDescription = ({
  className,
  children,
  ...props
}: DrawerDescriptionProps) => (
  <RadixDialog.Description asChild className={cn(className)} {...props}>
    <Text>{children}</Text>
  </RadixDialog.Description>
);

DrawerDescription.displayName = "Drawer.Description";

const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});

export { Drawer };
