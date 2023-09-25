import React from 'react';
import { Link } from 'gatsby';

interface ButtonLangProps {
  isShownButton: boolean;
  isShownMenu: boolean;
  onClick: () => void;
  isLightHeader: boolean;
  langs: [{ text: string; url: string }];
}

export function ButtonLang(props: ButtonLangProps) {
  const { isShownButton, isShownMenu, onClick, isLightHeader, langs } = props;

  return (
    <button
      className={`bg-gold relative rounded-lg px-7 py-1  ${
        isShownButton ? 'text-white' : 'bg-transparent text-transparent'
      }`}
      onClick={() => onClick()}>
      Ru
      <ul
        className={`absolute left-0 top-[68px] w-full ${
          isShownMenu ? '' : 'hidden'
        } ${
          isLightHeader ? ' bg-white text-black' : 'bg-softBlack text-white'
        }`}>
        {langs.map((lang, i) => {
          const firstItemClass = isLightHeader
            ? 'border-[#E5E5E5]'
            : 'border-transparent';
          const anotherItemsClass = isLightHeader
            ? 'border-[#E5E5E5]'
            : 'border-gray-100/20';
          const itemClass = i === 0 ? firstItemClass : anotherItemsClass;

          return (
            <li
              key={lang.text}
              className={`hover:bg-gold hover:border-gold border-t-2  hover:text-white ${itemClass}`}>
              <Link to={lang.url} className="block py-2">
                {lang.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </button>
  );
}
