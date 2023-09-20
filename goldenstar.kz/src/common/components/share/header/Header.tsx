import * as React from "react";
import { Link } from "gatsby";
import { Logo } from "common/components/logo";

export function Header(): React.JSX.Element {
  const data = [
    {
      text: "Компания",
      link: "/",
    },
    {
      text: "Проекты",
      link: "/directions",
    },
    {
      text: "Магазин",
      link: "/about-us",
    },
    {
      text: "Карьера",
      link: "/jobs",
    },
    {
      text: "Контакты",
      link: "/contacts",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 h-fit w-screen bg-transparent pt-5">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <Logo />
        <ul className="flex h-fit w-5/12 justify-between">
          {data.map((l) => {
            return (
              <li key={l.text} className="text-white">
                <Link to={l.link} className="px-2 ">
                  {l.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
