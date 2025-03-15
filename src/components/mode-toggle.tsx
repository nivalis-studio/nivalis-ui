"use client";

import { useEffect, useState, useTransition } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/registry/base/ui/button";

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
      size='icon'
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
