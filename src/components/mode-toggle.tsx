"use client";

import { useEffect, useState, useTransition } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/registry/base/components/button";

export const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size='small'
      onClick={() => {
        startTransition(() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        });
      }}
    >
      <Moon className='dark:hidden' />
      <Sun className='hidden dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
