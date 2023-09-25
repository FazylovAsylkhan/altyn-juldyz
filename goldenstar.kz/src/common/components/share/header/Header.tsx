import * as React from 'react';
import { Link } from 'gatsby';
import { Logo } from 'common/components/logo';
import { VerticalSubMenu } from 'common/components/subMenu';
import { ButtonLang } from 'common/components/button';

interface HeaderProps {
  isLight: boolean;
  buttonLangs: [{ text: string; url: string }];
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
  const { isLight, links, buttonLangs } = props;
  const [isShownButtonLang, setIsShownButtonLang] = React.useState(false);
  const [isShownMenuLang, setIsShownMenuLang] = React.useState(false);

  return (
    <header
      className={`fixed left-0 top-0 z-10 h-fit w-screen border-b-2 border-transparent ${
        isLight ? 'bg-white hover:border-[#E5E5E5]' : 'hover:bg-softBlack'
      } py-5`}
      onMouseMove={() => setIsShownButtonLang(true)}
      onMouseLeave={() => {
        setIsShownButtonLang(false);
        setIsShownMenuLang(false);
      }}>
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <Logo isDark={isLight} />
        <div className="flex w-6/12 items-center justify-between">
          <ButtonLang
            langs={buttonLangs}
            isShownButton={isShownButtonLang}
            isShownMenu={isShownMenuLang}
            isLightHeader={isLight}
            onClick={() => setIsShownMenuLang(!isShownMenuLang)}
          />
          <ul
            className={`flex h-fit w-10/12 justify-between ${
              isLight ? '' : 'text-white'
            }`}>
            {links.map((link) => {
              if (link.submenu !== null && link.submenu !== undefined) {
                return (
                  <VerticalSubMenu
                    onHover={() => setIsShownMenuLang(false)}
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
