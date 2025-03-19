"use client";

import { RadioGroup as RadixRadioGroup } from "@radix-ui/react-radio-group";
import * as React from "react";
import { Hint } from "@/registry/base/components/hint";
import { Label } from "@/registry/base/components/label";
import type { cn } from "@/lib/classnames";

/**
 * This component is based on the [Radix UI Radio Group](https://www.radix-ui.com/primitives/docs/components/radio-group) primitives.
 */
const Root = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadixRadioGroup.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});

Root.displayName = "RadioGroup";

const Indicator = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Indicator>
>(({ className, ...props }, ref) => {
  return (
    <RadixRadioGroup.Indicator
      ref={ref}
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div
        className={cn(
          "bg-ui-bg-base shadow-details-contrast-on-bg-interactive h-1.5 w-1.5 rounded-full",
        )}
      />
    </RadixRadioGroup.Indicator>
  );
});

Indicator.displayName = "RadioGroup.Indicator";

const Item = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadixRadioGroup.Item
      ref={ref}
      className={cn(
        "group relative flex h-5 w-5 items-center justify-center outline-none",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "shadow-borders-base bg-ui-bg-base flex h-[14px] w-[14px] items-center justify-center rounded-full transition-fg",
          "group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover",
          "group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow",
          "group-focus-visible:!shadow-borders-interactive-with-focus",
          "group-disabled:cursor-not-allowed group-disabled:opacity-50",
        )}
      >
        <Indicator />
      </div>
    </RadixRadioGroup.Item>
  );
});

Item.displayName = "RadioGroup.Item";

type ChoiceBoxProps = {
  readonly label: string;
  readonly description: string;
} & React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>;

const ChoiceBox = React.forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Item>,
  ChoiceBoxProps
>(({ className, id, label, description, ...props }, ref) => {
  const generatedId = React.useId();

  if (!id) {
    id = generatedId;
  }

  const descriptionId = `${id}-description`;

  return (
    <RadixRadioGroup.Item
      ref={ref}
      className={cn(
        "shadow-borders-base bg-ui-bg-base focus-visible:shadow-borders-interactive-with-focus group flex items-start gap-x-2 rounded-lg p-3 outline-none transition-fg",
        "hover:enabled:bg-ui-bg-base-hover",
        "data-[state=checked]:shadow-borders-interactive-with-shadow",
        "group-disabled:cursor-not-allowed group-disabled:opacity-50",
        className,
      )}
      {...props}
      id={id}
      aria-describedby={descriptionId}
    >
      <div className='flex h-5 w-5 items-center justify-center'>
        <div
          className={cn(
            "shadow-borders-base bg-ui-bg-base group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow flex h-3.5 w-3.5 items-center justify-center rounded-full transition-fg",
            "group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover",
          )}
        >
          <Indicator />
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <Label
          htmlFor={id}
          size='small'
          weight='plus'
          className='group-disabled:text-ui-fg-disabled cursor-pointer group-disabled:cursor-not-allowed'
        >
          {label}
        </Label>
        <Hint
          className='txt-small text-ui-fg-subtle group-disabled:text-ui-fg-disabled text-left'
          id={descriptionId}
        >
          {description}
        </Hint>
      </div>
    </RadixRadioGroup.Item>
  );
});

ChoiceBox.displayName = "RadioGroup.ChoiceBox";

const RadioGroup = Object.assign(Root, { Item, ChoiceBox });

export { RadioGroup };
