import '@/styles/globals.css';
import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

// eslint-disable-next-line import/no-default-export
export default Layout;
