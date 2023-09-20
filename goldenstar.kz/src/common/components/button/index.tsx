import * as React from "react";

interface ButtonProps {
  link?: string;
  stylesBtn?: string;
  stylesLink?: string;
  children: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element {
  const { link, stylesBtn, stylesLink, children } = props;

  return (
    <button className={`bg-gold rounded-lg text-white ${stylesBtn}`}>
      <a href={link} className={`px-20 py-3 block ${stylesLink}`}>
        {children}
      </a>
    </button>
  );
}
