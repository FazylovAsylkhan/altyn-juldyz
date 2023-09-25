import React from 'react';
import { Link } from 'gatsby';

interface HorizontalSubMenuProps {
  label: string;
  links: [
    {
      text: string;
      url: string;
    },
  ];
  isLight: boolean;
}

export function HorizontalSubMenu(props: HorizontalSubMenuProps) {
  const { label, links, isLight } = props;
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <li
      className={`menu__toggle-x hover:bg-gold hover:border-gold relative cursor-default border-t-2  px-5 py-3 ${
        isOpened ? 'menu__opened' : ''
      } ${
        isLight
          ? 'toggle__dark border-black/10 hover:text-white'
          : 'border-gray-100/20'
      }`}
      onMouseLeave={() => setIsOpened(false)}
      onMouseMove={() => setIsOpened(true)}>
      {label}
      <ul
        className={`border-softBlack absolute -top-[2px] left-72  w-[18rem] ${
          isOpened ? '' : 'hidden'
        } ${isLight ? 'bg-white text-black' : 'bg-softBlack'}`}>
        {links.map((link, i) => {
          const firstItemClass = 'border-transparent';
          const anotherItemClass = isLight
            ? 'border-black/10'
            : 'border-gray-100/20';
          const itemClass = i === 0 ? firstItemClass : anotherItemClass;

          return (
            <li
              key={link.text}
              className={`hover:bg-gold hover:border-gold  border-t-2 hover:text-white ${itemClass}`}>
              <Link className=" block px-5 py-3" to={link.url}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
