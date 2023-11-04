import * as React from 'react';
import { Link } from 'gatsby';
import { Logo } from 'common/components/logo';
import { VerticalSubMenu } from 'common/components/subMenu';
import { ButtonLang } from 'common/components/button';

interface HeaderProps {
  isLight?: boolean;
  isFixed?: boolean;
  lang: string;
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
  const { isLight, links, buttonLangs, lang, isFixed } = props;
  const [isShownButtonLang, setIsShownButtonLang] = React.useState(false);
  const [isShownMenuLang, setIsShownMenuLang] = React.useState(false);

  return (
    <header
      className={`iMac:py-7 left-0 top-0 z-10 h-fit w-full border-b-2 border-transparent py-5 ${
        isLight ? 'bg-white hover:border-[#E5E5E5]' : 'hover:bg-softBlack'
      } ${isFixed ? 'fixed' : 'absolute'}`}
      onMouseMove={() => setIsShownButtonLang(true)}
      onMouseLeave={() => {
        setIsShownButtonLang(false);
        setIsShownMenuLang(false);
      }}>
      <div className="iMac:max-w-iMac container mx-auto flex max-w-screen-xl items-center justify-between">
        <Logo isDark={isLight} />
        <div className="flex w-7/12 items-center justify-between">
          <ButtonLang
            value={lang}
            langs={buttonLangs}
            isShownButton={isShownButtonLang}
            isShownMenu={isShownMenuLang}
            isLightHeader={isLight}
            onClick={() => setIsShownMenuLang(!isShownMenuLang)}
          />
          <ul
            className={`iMac:text-2xl flex h-fit w-10/12 justify-between ${
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
