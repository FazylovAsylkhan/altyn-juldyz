import * as React from 'react';
import LogoIcon from 'assets/images/logo.svg';

export function Footer(): React.JSX.Element {
  return (
    <footer className="flex  rounded-lg  border-t-2 p-10">
      <div className="grid w-4/5 grid-cols-2">
        <ul>
          <strong className="mb-3 block font-serif text-sm">
            Производство и торговля
          </strong>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Швейно-обувная фабрика
            </a>
          </li>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Средство-индивидуальной защиты
            </a>
          </li>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Строительные инструменты и материалы
            </a>
          </li>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Строительное оборудование
            </a>
          </li>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Спортивные товары
            </a>
          </li>
        </ul>
        <ul>
          <strong className="mb-3 block font-serif text-sm">
            Сельское хозяйство
          </strong>
          <li>
            <a href="#" className=" mb-8 text-gray-600">
              Разведение КРС "Абердин Ангус" (племенной)
            </a>
          </li>
          <li>
            <a href="#" className=" mb-8 text-gray-600">
              Интенсивный явлочный сад
            </a>
          </li>
          <li>
            <a href="#" className=" mb-8 text-gray-600">
              Коневодство
            </a>
          </li>
          <li>
            <a href="#" className=" mb-8 text-gray-600">
              Органическое Удобрение - Биогумс (вермикомпост)
            </a>
          </li>
          <li>
            <a href="#" className=" mb-8 text-gray-600">
              Рыбоводство
            </a>
          </li>
          <li>
            <a href="#" className=" mb-8 text-gray-600">
              Разведение МРС "Романовские овцы"
            </a>
          </li>
        </ul>
        <ul>
          <strong className="mb-3 block font-serif text-sm">
            Строительство и проектирование
          </strong>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Жилищное строительство
            </a>
          </li>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Строительство инженерных сетей и коммуникаций
            </a>
          </li>
          <li>
            <a href="#" className="mb-8 text-gray-600">
              Аренда складских помещений класса А и С
            </a>
          </li>
        </ul>
      </div>
      <div className="flex w-1/5 justify-end">
        <LogoIcon className="h-full w-40" />
      </div>
    </footer>
  );
}
