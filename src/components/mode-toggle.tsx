'use client';

import { useTransition } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [, startTransition] = useTransition();

  return (
    <Button
      className='h-7 w-7'
      size='icon'
      variant='ghost'
      onClick={() => {
        startTransition(() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        });
      }}
    >
      <Moon className='dark:hidden' />
      <Sun className='hidden dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
