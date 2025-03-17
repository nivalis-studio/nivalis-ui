import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/classnames";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const badgeColorVariants = cva("", {
  variants: {
    color: {
      green:
        "bg-tag-green-bg text-tag-green-text [&_svg]:text-tag-green-icon border-ui-tag-green-border",
      red: "bg-tag-red-bg text-tag-red-text [&_svg]:text-tag-red-icon border-ui-tag-red-border",
      blue: "bg-tag-blue-bg text-tag-blue-text [&_svg]:text-tag-blue-icon border-ui-tag-blue-border",
      orange:
        "bg-tag-orange-bg text-tag-orange-text [&_svg]:text-tag-orange-icon border-ui-tag-orange-border",
      grey: "bg-tag-neutral-bg text-tag-neutral-text [&_svg]:text-tag-neutral-icon border-ui-tag-neutral-border",
      purple:
        "bg-tag-purple-bg text-tag-purple-text [&_svg]:text-tag-purple-icon border-ui-tag-purple-border",
    },
  },
  defaultVariants: {
    color: "grey",
  },
});

const badgeSizeVariants = cva(
  "inline-flex items-center gap-x-0.5 border box-border",
  {
    variants: {
      size: {
        "2xs": "txt-compact-xsmall-plus h-5",
        xs: "txt-compact-xsmall-plus py-px h-6",
        sm: "txt-compact-xsmall-plus py-[3px] h-7",
        base: "txt-compact-small-plus py-[5px] h-8",
        lg: "txt-compact-medium-plus py-[7px] h-10",
      },
      rounded: {
        base: "rounded-md",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        size: "2xs",
        rounded: "full",
        className: "px-1.5",
      },
      {
        size: "2xs",
        rounded: "base",
        className: "px-1",
      },
      {
        size: "xs",
        rounded: "full",
        className: "px-2",
      },
      {
        size: "xs",
        rounded: "base",
        className: "px-1.5",
      },
      {
        size: "sm",
        rounded: "full",
        className: "px-2.5",
      },
      {
        size: "sm",
        rounded: "base",
        className: "px-2",
      },
      {
        size: "base",
        rounded: "full",
        className: "px-3",
      },
      {
        size: "base",
        rounded: "base",
        className: "px-2.5",
      },
      {
        size: "lg",
        rounded: "full",
        className: "px-3.5",
      },
      {
        size: "lg",
        rounded: "base",
        className: "px-3",
      },
    ],
    defaultVariants: {
      size: "base",
      rounded: "base",
    },
  },
);

type BadgeProps = {
  // eslint-disable-next-line react/boolean-prop-naming
  readonly asChild?: boolean;
} & Omit<ComponentProps<"span">, "color"> &
  VariantProps<typeof badgeSizeVariants> &
  VariantProps<typeof badgeColorVariants>;

/*
 * This component is based on the `div` element and supports all of its props
 */
export const Badge = ({
  className,
  /**
   * The badge's size.
   */
  size = "base",
  /**
   * The style of the badge's border radius.
   */
  rounded = "base",
  /**
   * The badge's color.
   */
  color = "grey",
  /**
   * Whether to remove the wrapper `span` element and use the
   * passed child element instead.
   */
  asChild = false,
  ...props
}: BadgeProps) => {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      data-slot='badge'
      className={cn(
        badgeColorVariants({ color }),
        badgeSizeVariants({ size, rounded }),
        className,
      )}
      {...props}
    />
  );
};
