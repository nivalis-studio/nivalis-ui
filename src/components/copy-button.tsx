"use client";

import { useEffect, useState } from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { cn } from "@/lib/classnames";
import { Button } from "@/registry/base/components/button";

export const copyToClipboard = async (value: string) => {
  await navigator.clipboard.writeText(value);
};

const ANIMATION_DELAY = 2000;

type Props = {
  readonly value: string;
};

export const CopyButton = ({ value }: Props) => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasCopied(false);
    }, ANIMATION_DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, [hasCopied]);

  return (
    <Button
      size='small'
      className='size-7'
      onClick={async () => {
        await copyToClipboard(value);
        setHasCopied(true);
      }}
    >
      <span className='sr-only'>Copy</span>
      <CheckIcon
        className={cn(
          "absolute size-4 transition-all duration-200",
          hasCopied ? "opacity-100 delay-150" : "opacity-0 delay-75",
        )}
      />
      <ClipboardIcon
        className={cn(
          "absolute size-4 transition-all duration-200",
          hasCopied ? "opacity-0 delay-75" : "opacity-100 delay-150",
        )}
      />
    </Button>
  );
};
