"use client";

import { useCallback, useImperativeHandle, useRef, useState } from "react";
import Primitive from "react-currency-input-field";
import { cva } from "class-variance-authority";
import { Text } from "@/registry/base/components/text";
import { cn } from "@/lib/classnames";
import type { ComponentProps, FormEvent } from "react";
import type { VariantProps } from "class-variance-authority";

const currencyInputVariants = cva(
  cn(
    "flex items-center gap-x-1",
    "bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-buttons-neutral placeholder-ui-fg-muted text-ui-fg-base relative w-full rounded-md transition-fg",
    "focus-within:shadow-borders-interactive-with-active",
  ),
  {
    variants: {
      size: {
        base: "txt-compact-medium h-8",
        small: "txt-compact-small h-7",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

type CurrencyInputProps = {
  readonly symbol: string;
  readonly code: string;
} & Omit<ComponentProps<typeof Primitive>, "prefix" | "suffix" | "size"> &
  VariantProps<typeof currencyInputVariants>;

/*
 * This component is based on the input element and supports all of its props
 * @excludeExternal
 */
export const CurrencyInput = ({
  /**
   * The input's size.
   */
  size = "base",
  /**
   * The symbol to show in the input.
   */
  symbol,
  /**
   * The currency code to show in the input.
   */
  code,
  disabled,
  onInvalid,
  className,
  ref,
  ...props
}: CurrencyInputProps) => {
  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    ref,
    () => innerRef.current,
  );

  const [valid, setValid] = useState(true);

  const onInnerInvalid = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setValid(event.currentTarget.validity.valid);

      if (onInvalid) {
        onInvalid(event);
      }
    },
    [onInvalid],
  );

  return (
    <div
      className={cn(
        "w-full cursor-text justify-between overflow-hidden",
        currencyInputVariants({ size }),
        {
          "text-ui-fg-disabled !bg-ui-bg-disabled !shadow-buttons-neutral !placeholder-ui-fg-disabled cursor-not-allowed":
            disabled,
          "!shadow-borders-error invalid:!shadow-borders-error":
            props["aria-invalid"] || !valid,
        },
        className,
      )}
      onClick={() => {
        if (innerRef.current) {
          innerRef.current.focus();
        }
      }}
    >
      <span
        role='presentation'
        className={cn("w-fit min-w-[32px] border-r px-2", {
          "py-[9px]": size === "base",
          "py-[5px]": size === "small",
        })}
      >
        <Text
          size='small'
          leading='compact'
          className={cn(
            "text-ui-fg-muted pointer-events-none select-none uppercase",
            {
              "text-ui-fg-disabled": disabled,
            },
          )}
        >
          {code}
        </Text>
      </span>
      <Primitive
        ref={innerRef}
        className='h-full min-w-0 flex-1 appearance-none bg-transparent text-right outline-none disabled:cursor-not-allowed'
        disabled={disabled}
        onInvalid={onInnerInvalid}
        {...props}
      />
      <span
        role='presentation'
        className={cn(
          "flex w-fit min-w-[32px] items-center justify-center border-l px-2 text-right",
          {
            "py-[9px]": size === "base",
            "py-[5px]": size === "small",
          },
        )}
      >
        <Text
          size='small'
          leading='compact'
          className={cn("text-ui-fg-muted pointer-events-none select-none", {
            "text-ui-fg-disabled": disabled,
          })}
        >
          {symbol}
        </Text>
      </span>
    </div>
  );
};
