"use client";

import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  XCircleSolid,
  XMarkMini,
} from "@medusajs/icons";
import { useState } from "react";
import { cn } from "@/lib/classnames";
import { IconButton } from "@/registry/base/ui/icon-button";
import type { ComponentProps } from "react";

type AlertProps = {
  readonly variant?: "error" | "success" | "warning" | "info";
  // eslint-disable-next-line react/boolean-prop-naming
  readonly dismissible?: boolean;
} & ComponentProps<"div">;

/*
 * This component is based on the div element and supports all of its props
 *
 * @excludeExternal
 */
export const Alert = ({
  /**
   * The variant of the alert
   */
  variant = "info",
  /**
   * Whether the alert is dismissible
   */
  dismissible = false,
  className,
  children,
  ...props
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  const Icon = {
    info: InformationCircleSolid,
    error: XCircleSolid,
    success: CheckCircleSolid,
    warning: ExclamationCircleSolid,
  }[variant];

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (dismissed) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-ui-bg-subtle txt-compact-small grid items-start gap-x-2 text-pretty rounded-lg border p-3",
        {
          "grid-cols-[20px_1fr]": !dismissible,
          "grid-cols-[20px_1fr_20px]": dismissible,
        },
        className,
      )}
      {...props}
    >
      <Icon
        className={cn({
          "text-ui-tag-red-icon": variant === "error",
          "text-ui-tag-green-icon": variant === "success",
          "text-ui-tag-orange-icon": variant === "warning",
          "text-ui-tag-neutral-icon": variant === "info",
        })}
      />
      <div>{children}</div>
      {dismissible ? (
        <IconButton
          size='2xs'
          variant='transparent'
          type='button'
          onClick={handleDismiss}
        >
          <XMarkMini className='text-ui-fg-muted' />
        </IconButton>
      ) : null}
    </div>
  );
};
