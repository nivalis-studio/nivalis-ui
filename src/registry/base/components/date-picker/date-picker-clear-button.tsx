"use client";

import { cn } from "@/lib/classnames";
import type { ComponentProps, KeyboardEvent } from "react";

const ALLOWED_KEYS = new Set([
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
]);

export const DatePickerClearButton = ({
  type = "button",
  className,
  children,
  ...props
}: ComponentProps<"button">) => {
  /*
   * Allows the button to be used with only the keyboard.
   * Otherwise the wrapping component will hijack the event.
   * @param event
   */
  const stopPropagation = (event: KeyboardEvent) => {
    if (!ALLOWED_KEYS.has(event.key)) {
      event.stopPropagation();
    }
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      aria-label='Clear date'
      className={cn(
        "text-ui-fg-muted flex size-full items-center justify-center outline-none transition-fg",
        "hover:bg-ui-button-transparent-hover",
        "focus-visible:bg-ui-bg-interactive focus-visible:text-ui-fg-on-color",
        className,
      )}
      onKeyDown={stopPropagation}
      {...props}
    >
      {children}
    </button>
  );
};
