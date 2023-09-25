import * as React from 'react';
import { Link } from 'gatsby';
import { Logo } from 'common/components/logo';
import { VerticalSubMenu } from 'common/components/subMenu';

interface HeaderProps {
  isLight: boolean;
  langButtonLangs: string;
  links: [
    {
      text: string;
      url: string;
      submenu?: [
        {
          text: string;
          url: string;
          submenu?: [
            {
              text: string;
              url: string;
            },
          ];
        },
      ];
    },
  ];
}

export function Header(props: HeaderProps): React.JSX.Element {
  const { isLight, links } = props;

  return (
    <header
      className={`fixed left-0 top-0 z-10 h-fit w-screen border-b-2 border-transparent ${
        isLight ? 'bg-white hover:border-black/10' : 'hover:bg-softBlack'
      } py-5`}>
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <Logo isDark={isLight} />
        <div className="w-5/12">
          <ul
            className={`flex h-fit justify-between ${
              isLight ? '' : 'text-white'
            }`}>
            {links.map((link) => {
              if (link.submenu !== null && link.submenu !== undefined) {
                return (
                  <VerticalSubMenu
                    key={link.text}
                    isLight={isLight}
                    label={link.text}
                    links={link.submenu}
                  />
                );
              }

              return (
                <li key={link.text}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
