import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { fonts } from '@/fonts';
import { cn } from '@/lib/classnames';
import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: { default: 'nivalis ui', template: '%s | nivalis ui' },
  description: 'Component library for Next.js projects',
  metadataBase: new URL('https://ui.nivalis.studio'),
};

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html className={cn('font-mono', fonts)} lang='en' suppressHydrationWarning>
      <body className='isolate'>
        <RootProvider>
          {children}
          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
};

export default Layout;
