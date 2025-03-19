"use client";

import { useImperativeHandle, useRef } from "react";
import { useButton } from "react-aria";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";
import type { AriaButtonProps } from "react-aria";

type CalendarButtonProps = {
  readonly size?: "base" | "small";
} & AriaButtonProps<"button"> &
  ComponentProps<"button">;

const DatePickerButton = ({
  children,
  size = "base",
  ref,
  ...props
}: CalendarButtonProps) => {
  const innerRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => innerRef.current!);

  const { buttonProps } = useButton(props, innerRef);

  return (
    <button
      type='button'
      aria-label='Open calendar'
      className={cn(
        "text-ui-fg-muted flex items-center justify-center border-r outline-none transition-fg",
        "disabled:text-ui-fg-disabled",
        "hover:bg-ui-button-transparent-hover",
        "focus-visible:bg-ui-bg-interactive focus-visible:text-ui-fg-on-color",
        {
          "size-7": size === "small",
          "size-8": size === "base",
        },
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

DatePickerButton.displayName = "DatePickerButton";

export { DatePickerButton };
