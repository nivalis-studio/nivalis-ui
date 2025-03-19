import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { badgeColorVariants } from "@/registry/base/components/badge";
import { cn } from "@/lib/classnames";
import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

const iconBadgeVariants = cva(
  "flex items-center justify-center overflow-hidden rounded-md border",
  {
    variants: {
      size: {
        base: "h-6 w-6",
        large: "h-7 w-7",
      },
    },
  },
);

type IconBadgeProps = {
  // eslint-disable-next-line react/boolean-prop-naming
  readonly asChild?: boolean;
} & Omit<ComponentProps<"span">, "color"> &
  VariantProps<typeof badgeColorVariants> &
  VariantProps<typeof iconBadgeVariants>;

/*
 * This component is based on the `span` element and supports all of its props
 */
const IconBadge = ({
  children,
  className,
  /**
   * The badge's color.
   */
  color = "grey",
  /**
   * The badge's size.
   */
  size = "base",
  /**
   * Whether to remove the wrapper `span` element and use the
   * passed child element instead.
   */
  asChild = false,
  ...props
}: IconBadgeProps) => {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={cn(
        badgeColorVariants({ color }),
        iconBadgeVariants({ size }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

IconBadge.displayName = "IconBadge";

export { IconBadge };
