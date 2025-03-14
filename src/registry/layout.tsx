import '@/styles/globals.css';
import type { PropsWithChildren } from 'react';

const Layout = async ({ children }: PropsWithChildren) => {
  return await children;
};

// eslint-disable-next-line import/no-default-export
export default Layout;
