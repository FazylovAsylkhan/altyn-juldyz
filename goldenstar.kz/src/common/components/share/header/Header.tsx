import * as React from 'react';
import { Link } from 'gatsby';
import LogoIcon from 'assets/images/logo.svg';

export function Header(): React.JSX.Element {
  return (
    <header className="mb-10 flex  items-center justify-between rounded-lg border-b-2  p-5 drop-shadow-md">
      <div className="w-2/5 pl-11">
        <LogoIcon className="h-full w-40" />
      </div>
      <ul className="flex w-2/5 justify-between">
        <li>
          <Link to="/" className="px-2">
            Главная
          </Link>
        </li>
        <li>
          <a href="#" className="px-2">
            Направления
          </a>
        </li>
        <li>
          <a href="#" className="px-2">
            О нас
          </a>
        </li>
        <li>
          <a href="#" className="px-2">
            Вакансии
          </a>
        </li>
        <li>
          <Link to="/contacts" className="px-2">
            Контакты
          </Link>
        </li>
      </ul>
    </header>
  );
}
