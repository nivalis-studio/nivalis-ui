'use client';

import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { cn } from '@/lib/classnames';
import type { ComponentProps } from 'react';

const AvatarRoot = ({ className, ...props }: ComponentProps<typeof Root>) => {
  return (
    <Root
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      data-slot='avatar'
      {...props}
    />
  );
};

const AvatarImage = ({ className, ...props }: ComponentProps<typeof Image>) => {
  return (
    <Image
      className={cn('aspect-square size-full', className)}
      data-slot='avatar-image'
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  ...props
}: ComponentProps<typeof Fallback>) => {
  return (
    <Fallback
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-muted',
        className,
      )}
      data-slot='avatar-fallback'
      {...props}
    />
  );
};

const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { Avatar };
