'use client';

import { ThemeProvider } from 'next-themes';

export const Providers = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem={false}
      attribute='class'
      defaultTheme='dark'
    >
      {children}
    </ThemeProvider>
  );
};
