import * as React from 'react';
import { Logo } from 'common/components/logo';
import LogoIconDark from 'assets/icons/logo-dark.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import WhatsupIcon from 'assets/icons/whatsup.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import EmailIcon from 'assets/icons/email.svg';

interface FooterProps {
  links: [
    {
      text: string;
      submenu: [
        {
          text: string;
          url: string;
        },
      ];
    },
  ];
  description: string;
  copyright: {
    rights: string;
    company: string;
  };
}

export function Footer(props: FooterProps): React.JSX.Element {
  const { links, description, copyright } = props;
  const [firstList, secondList, thirdList] = links;
  const listItemClass = 'mt-3 iMac:mt-6';
  const titleClass = 'text-gold font-bold iMac:text-xl';
  const linkClass = 'text-lg iMac:text-2xl hover:text-gold';
  const iconClass = 'iMac:h-12 w-fit h-7';

  return (
    <footer>
      <div className="iMac:max-w-iMac container mx-auto grid max-w-screen-xl grid-cols-3 py-16">
        <div>
          <ul>
            <h4 className={titleClass}>{firstList.text}</h4>
            {firstList.submenu.map((item) => {
              return (
                <li key={item.text} className={listItemClass}>
                  <a href={item.url} className={linkClass}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="mt-10">
            <h4 className={titleClass}>{secondList.text}</h4>
            {secondList.submenu.map((item) => {
              return (
                <li key={item.text} className={listItemClass}>
                  <a href={item.url} className={linkClass}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h4 className={titleClass}>{thirdList.text}</h4>
            {thirdList.submenu.map((item) => {
              return (
                <li key={item.text} className={listItemClass}>
                  <a href={item.url} className={linkClass}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <LogoIconDark className="iMac:h-28 w-fit" />
          <p className="iMac:text-2xl text-text-gray-400 mt-5">{description}</p>
          <div className="mt-10 grid grid-cols-4 items-center">
            <a href="https://instagram.com/altyn_juldyz?igshid=MzRlODBiNWFlZA==">
              <InstagramIcon className={iconClass} />
            </a>
            <a href="https://wa.me/77028053347?text=urlencodedtext.">
              <WhatsupIcon className={iconClass} />
            </a>
            <a href="https://www.facebook.com/altynjuldyz?mibextid=LQQJ4d">
              <FacebookIcon className={iconClass} />
            </a>
            <a href="mailto:a.janat@hotmail.com">
              <EmailIcon className={iconClass} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 py-10">
        <div className="iMac:max-w-iMac iMac:text-2xl container mx-auto flex max-w-screen-xl items-center justify-between text-lg text-gray-500">
          <div>{copyright.rights}</div>
          <div>{copyright.company}</div>
        </div>
      </div>
    </footer>
  );
}
