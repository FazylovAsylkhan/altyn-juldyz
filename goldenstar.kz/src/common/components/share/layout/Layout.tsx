import * as React from 'react';
import { Footer, Header } from 'common/components/share';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps): React.JSX.Element {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
