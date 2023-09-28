import React from 'react';
import { Link } from 'gatsby';
import { HorizontalSubMenu } from '.';

interface VerticalSubMenuProps {
  label: string;
  isLight: boolean;
  links: [
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
  onHover: () => void;
}

export function VerticalSubMenu(props: VerticalSubMenuProps) {
  const { label, links, isLight, onHover } = props;
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <li
      className={`menu__toggle-y relative z-20 pr-4 ${
        isOpened ? 'menu__opened' : ''
      } ${isLight ? 'toggle__dark' : ''}`}
      onMouseLeave={() => setIsOpened(false)}
      onMouseMove={() => {
        setIsOpened(true);
        onHover();
      }}>
      {label}
      <ul
        className={`iMac:top-[2.1rem] iMac:w-[25rem] iMac:pt-[3.8rem] absolute -left-5 top-[1.4rem] w-[18rem] pt-[2.6rem] ${
          isOpened ? '' : 'hidden'
        } ${isLight ? 'bg-white' : 'bg-softBlack'}`}
        onMouseLeave={() => setIsOpened(false)}
        onMouseMove={() => setIsOpened(true)}>
        {links.map((link, i) => {
          const firstItemClass = isLight
            ? 'hover:border-[#E5E5E5]'
            : 'border-softBlack hover:border-softBlack';
          const anotherItemClass = isLight
            ? ''
            : 'hover:border-gold border-gray-100/20';
          const itemClass = i === 0 ? firstItemClass : anotherItemClass;

          if (link.submenu !== null && link.submenu !== undefined) {
            return (
              <HorizontalSubMenu
                isLight={isLight}
                label={link.text}
                key={link.text}
                links={link.submenu}
              />
            );
          }

          return (
            <li
              key={link.text}
              className={`hover:bg-gold border-t-2 hover:text-white ${itemClass}`}>
              <Link to={link.url} className="block px-5 py-3">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
