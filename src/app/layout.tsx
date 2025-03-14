import "@/styles/globals.css";
import { fonts } from "@/fonts";
import { cn } from "@/lib/classnames";
import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: { default: "@nivalis/ui", template: "%s | @nivalis/ui" },
  description: "@nivalis/ui",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html suppressHydrationWarning lang='en' className={cn(fonts)}>
      <body className='isolate'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
