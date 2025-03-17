"use client";

import { Fallback, Image, Root } from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/classnames";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const avatarVariants = cva(
  "flex shrink-0 items-center justify-center overflow-hidden shadow-borders-base bg-bg-base",
  {
    variants: {
      variant: {
        squared: "",
        rounded: "rounded-full",
      },
      size: {
        "2xs": "h-5 w-5",
        xs: "h-6 w-6",
        sm: "h-7 w-7",
        base: "h-8 w-8",
        lg: "h-10 w-10",
        xl: "h-12 w-12",
      },
    },
    compoundVariants: [
      {
        variant: "squared",
        size: "2xs",
        className: "rounded",
      },
      {
        variant: "squared",
        size: "xs",
        className: "rounded-md",
      },
      {
        variant: "squared",
        size: "sm",
        className: "rounded-md",
      },
      {
        variant: "squared",
        size: "base",
        className: "rounded-md",
      },
      {
        variant: "squared",
        size: "lg",
        className: "rounded-lg",
      },
      {
        variant: "squared",
        size: "xl",
        className: "rounded-xl",
      },
    ],
    defaultVariants: {
      variant: "rounded",
      size: "base",
    },
  },
);

const innerVariants = cva("aspect-square object-cover object-center", {
  variants: {
    variant: {
      squared: "",
      rounded: "rounded-full",
    },
    size: {
      "2xs": "txt-compact-xsmall-plus size-4",
      xs: "txt-compact-xsmall-plus size-5",
      sm: "txt-compact-small-plus size-6",
      base: "txt-compact-small-plus size-7",
      lg: "txt-compact-medium-plus size-9",
      xl: "txt-compact-large-plus size-11",
    },
  },
  compoundVariants: [
    {
      variant: "squared",
      size: "2xs",
      className: "rounded-sm",
    },
    {
      variant: "squared",
      size: "xs",
      className: "rounded",
    },
    {
      variant: "squared",
      size: "sm",
      className: "rounded",
    },
    {
      variant: "squared",
      size: "base",
      className: "rounded",
    },
    {
      variant: "squared",
      size: "lg",
      className: "rounded-md",
    },
    {
      variant: "squared",
      size: "xl",
      className: "rounded-[10px]",
    },
  ],
  defaultVariants: {
    variant: "rounded",
    size: "base",
  },
});

type AvatarProps = {
  readonly src?: string;
  readonly fallback: string;
} & Omit<ComponentProps<typeof Root>, "asChild" | "children" | "size"> &
  VariantProps<typeof avatarVariants>;

/*
 * This component is based on the [Radix UI Avatar](https://www.radix-ui.com/primitives/docs/components/avatar) primitive.
 */
export const Avatar = ({
  /**
   * The URL of the image used in the Avatar.
   */
  src,
  /**
   * Text to show in the avatar if the URL provided in `src` can't be opened.
   */
  fallback,
  /**
   * The style of the avatar.
   */
  variant = "rounded",
  /**
   * The size of the avatar's border radius.
   */
  size = "base",
  className,
  ...props
}: AvatarProps) => {
  return (
    <Root
      data-slot='avatar'
      {...props}
      className={cn(avatarVariants({ variant, size }), className)}
    >
      {src ? (
        <Image
          data-slot='avatar-image'
          src={src}
          className={innerVariants({ variant, size })}
        />
      ) : null}
      <Fallback
        data-slot='avatar-fallback'
        className={cn(
          innerVariants({ variant, size }),
          "bg-bg-component-hover text-fg-subtle pointer-events-none flex select-none items-center justify-center",
        )}
      >
        {fallback}
      </Fallback>
    </Root>
  );
};
