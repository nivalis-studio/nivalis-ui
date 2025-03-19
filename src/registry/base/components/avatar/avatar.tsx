"use client";

// eslint-disable-next-line no-restricted-syntax
import * as RadixAvatar from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "flex shrink-0 items-center justify-center overflow-hidden shadow-borders-base bg-ui-bg-base",
  {
    variants: {
      variant: {
        squared: "",
        rounded: "rounded-full",
      },
      size: {
        "2xsmall": "h-5 w-5",
        xsmall: "h-6 w-6",
        small: "h-7 w-7",
        base: "h-8 w-8",
        large: "h-10 w-10",
        xlarge: "h-12 w-12",
      },
    },
    compoundVariants: [
      {
        variant: "squared",
        size: "2xsmall",
        className: "rounded",
      },
      {
        variant: "squared",
        size: "xsmall",
        className: "rounded-md",
      },
      {
        variant: "squared",
        size: "small",
        className: "rounded-md",
      },
      {
        variant: "squared",
        size: "base",
        className: "rounded-md",
      },
      {
        variant: "squared",
        size: "large",
        className: "rounded-lg",
      },
      {
        variant: "squared",
        size: "xlarge",
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
      "2xsmall": "txt-compact-xsmall-plus size-4",
      xsmall: "txt-compact-xsmall-plus size-5",
      small: "txt-compact-small-plus size-6",
      base: "txt-compact-small-plus size-7",
      large: "txt-compact-medium-plus size-9",
      xlarge: "txt-compact-large-plus size-11",
    },
  },
  compoundVariants: [
    {
      variant: "squared",
      size: "2xsmall",
      className: "rounded-sm",
    },
    {
      variant: "squared",
      size: "xsmall",
      className: "rounded",
    },
    {
      variant: "squared",
      size: "small",
      className: "rounded",
    },
    {
      variant: "squared",
      size: "base",
      className: "rounded",
    },
    {
      variant: "squared",
      size: "large",
      className: "rounded-md",
    },
    {
      variant: "squared",
      size: "xlarge",
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
} & Omit<
  ComponentProps<typeof RadixAvatar.Root>,
  "asChild" | "children" | "size"
> &
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
    <RadixAvatar.Root
      data-slot='avatar'
      {...props}
      className={cn(avatarVariants({ variant, size }), className)}
    >
      {src ? (
        <RadixAvatar.Image
          data-slot='avatar-image'
          src={src}
          className={innerVariants({ variant, size })}
        />
      ) : null}
      <RadixAvatar.Fallback
        data-slot='avatar-fallback'
        className={cn(
          innerVariants({ variant, size }),
          "bg-ui-bg-component-hover text-ui-fg-subtle pointer-events-none flex select-none items-center justify-center",
        )}
      >
        {fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
