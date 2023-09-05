import * as React from 'react';
import { Link } from 'gatsby';
import LogoIcon from 'assets/images/logo.svg';

export function Header(): React.JSX.Element {
  const data = [
    {
      text: 'Главная',
      link: '/',
    },
    {
      text: 'Направления',
      link: '/directions',
    },
    {
      text: 'О нас',
      link: '/about-us',
    },
    {
      text: 'Вакансии',
      link: '/jobs',
    },
    {
      text: 'Контакты',
      link: '/contacts',
    },
  ];

  return (
    <div>
      <header className="container mx-auto flex max-w-screen-xl  items-center justify-between rounded-lg border-b-2  p-5 drop-shadow-md">
        <div className="w-2/5">
          <LogoIcon className="h-full w-40" />
        </div>
        <ul className="flex w-2/5 justify-between">
          {data.map((l) => {
            return (
              <li key={l.text}>
                <Link to={l.link} className="px-2" activeClassName="text-gold">
                  {l.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}
