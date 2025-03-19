"use client";

import { CheckMini, MinusMini } from "@medusajs/icons";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";

type CheckboxProps = ComponentProps<typeof RadixCheckbox.Root> & {
  readonly checked?: RadixCheckbox.CheckedState | undefined;
};

/*
 * This component is based on the [Radix UI Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox) primitive.
 */
export const Checkbox = ({ className, checked, ...props }: CheckboxProps) => {
  return (
    <RadixCheckbox.Root
      {...props}
      checked={checked}
      className={cn(
        "group inline-flex h-5 w-5 items-center justify-center outline-none",
        className,
      )}
    >
      <div
        className={cn(
          "text-ui-fg-on-inverted bg-ui-bg-base shadow-borders-base [&_path]:shadow-details-contrast-on-bg-interactive h-[15px] w-[15px] rounded-[3px] transition-fg",
          "group-disabled:cursor-not-allowed group-disabled:opacity-50",
          "group-focus-visible:!shadow-borders-interactive-with-focus",
          "group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover",
          "group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow",
          "group-data-[state=indeterminate]:bg-ui-bg-interactive group-data-[state=indeterminate]:shadow-borders-interactive-with-shadow",
        )}
      >
        <RadixCheckbox.Indicator>
          {checked === "indeterminate" ? <MinusMini /> : <CheckMini />}
        </RadixCheckbox.Indicator>
      </div>
    </RadixCheckbox.Root>
  );
};
