import * as React from "react";
import { Logo } from "common/components/logo";

export function Footer(): React.JSX.Element {
  const menu = [
    {
      title: "Производство и торговля",
      links: [
        {
          text: "Швейно-обувная фабрика",
          link: "#",
        },
        {
          text: "Средство-индивидуальной защиты",
          link: "#",
        },
        {
          text: "Строительные инструменты и материалы",
          link: "#",
        },
        {
          text: "Строительное оборудование",
          link: "#",
        },
        {
          text: "Спортивные товары",
          link: "#",
        },
      ],
    },
    {
      title: "Сельское хозяйство",
      links: [
        {
          text: 'Разведение КРС "Абердин Ангус"',
          link: "#",
        },
        {
          text: "Интенсивный явлочный сад",
          link: "#",
        },
        {
          text: "Коневодство",
          link: "#",
        },
        {
          text: "Органическое Удобрение - Биогумс",
          link: "#",
        },
        {
          text: "Рыбоводство",
          link: "#",
        },
        {
          text: 'Разведение МРС "Романовские овцы"',
          link: "#",
        },
      ],
    },
    {
      title: "Строительство и проектирование",
      links: [
        {
          text: "Жилищное строительство",
          link: "#",
        },
        {
          text: "Строительство инженерных сетей и коммуникаций",
          link: "#",
        },
        {
          text: "Аренда складских помещений класса А и С",
          link: "#",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="container mx-auto flex max-w-screen-xl flex-wrap rounded-lg border-t-2 px-5 py-10">
        <div className="grid w-4/5 grid-cols-2">
          {menu.map((m) => {
            return (
              <ul key={m.title}>
                <strong className="text-gold mb-3 block font-serif text-sm">
                  {m.title}
                </strong>
                {m.links.map((l) => {
                  return (
                    <li key={l.text}>
                      <a href={l.link} className="mb-10 text-gray-600">
                        {l.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="flex w-1/5 justify-end">
          <Logo />
        </div>
      </div>
      <div className="container mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between rounded-t-lg bg-gray-200 px-5 text-white">
        <strong>2023 ALTYN JULDYZ ©</strong>
        <strong>Все права защищены</strong>
      </div>
    </footer>
  );
}
