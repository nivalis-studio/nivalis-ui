"use client";

import {
  CheckCircleMiniSolid,
  CheckCircleSolid,
  SquareTwoStack,
  SquareTwoStackMini,
} from "@medusajs/icons";
import copy from "copy-to-clipboard";
import { Slot } from "@radix-ui/react-slot";
import React, { useState } from "react";
import { cn } from "@/lib/classnames";
import { Tooltip } from "@/registry/base/components/tooltip";

type CopyProps = React.HTMLAttributes<HTMLButtonElement> & {
  readonly content: string;
  readonly variant?: "mini" | "default" | null;
  readonly asChild?: boolean;
};

/*
 * This component is based on the `button` element and supports all of its props
 */
export const Copy = ({
  children,
  className,
  /**
   * The content to copy.
   */
  content,
  /**
   * The variant of the copy button.
   */
  variant = "default",
  /**
   * Whether to remove the wrapper `button` element and use the
   * passed child element instead.
   */
  asChild = false,
  ...props
}: CopyProps) => {
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Copy");

  const copyToClipboard = (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    setDone(true);
    copy(content);

    setTimeout(() => {
      setDone(false);
    }, 2000);
  };

  React.useEffect(() => {
    if (done) {
      setText("Copied");

      return;
    }

    setTimeout(() => {
      setText("Copy");
    }, 500);
  }, [done]);

  const isDefaultVariant = (variant?: string | null): variant is "default" => {
    return variant === "default";
  };

  const isDefault = isDefaultVariant(variant);

  const Component = asChild ? Slot : "button";

  return (
    <Tooltip content={text} open={done || open} onOpenChange={setOpen}>
      <Component
        aria-label='Copy code snippet'
        type='button'
        className={cn("h-fit w-fit", className)}
        onClick={copyToClipboard}
        {...props}
      >
        {children ||
          (done ? (
            isDefault ? (
              <CheckCircleSolid className='text-ui-fg-subtle' />
            ) : (
              <CheckCircleMiniSolid className='text-ui-fg-subtle' />
            )
          ) : isDefault ? (
            <SquareTwoStack className='text-ui-fg-subtle' />
          ) : (
            <SquareTwoStackMini className='text-ui-fg-subtle' />
          ))}
      </Component>
    </Tooltip>
  );
};
