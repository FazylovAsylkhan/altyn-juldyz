import * as React from 'react';

interface ButtonProps {
  link?: string;
  stylesBtn?: string;
  stylesLink?: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element {
  const { link, stylesBtn, stylesLink, children } = props;

  return (
    <button
      className={`bg-gold iMac:text-2xl rounded-lg text-white ${stylesBtn}`}>
      <a
        href={link}
        className={`iMac:py-6 iMac:px-24 block px-20 py-3 ${stylesLink}`}>
        {children}
      </a>
    </button>
  );
}
