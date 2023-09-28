import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import Icon1 from 'assets/icons/main-page-icons/advantages-1.svg';
import Icon2 from 'assets/icons/main-page-icons/advantages-2.svg';
import Icon3 from 'assets/icons/main-page-icons/advantages-3.svg';
import Icon4 from 'assets/icons/main-page-icons/advantages-4.svg';
import { Button } from 'common/components/button';

export interface ComfortJagalauProps {
  data: {
    title: string;
    description: string;
    image: ImageDataLike | null;
    button: {
      text: string;
      link: string;
    };
    advantages: {
      title: string;
      items: [string];
    };
  };
}

export function ComfortJagalau(props: ComfortJagalauProps): React.JSX.Element {
  const { title, description, image, button, advantages } = props.data;
  const pathImage = getImage(image);
  const arrIcons = [
    <Icon1 className="iMac:w-40 iMac:h-40 mb-5" key={1} />,
    <Icon2 className="iMac:w-40 iMac:h-40 mb-5" key={2} />,
    <Icon3 className="iMac:w-40 iMac:h-40 mb-5" key={3} />,
    <Icon4 className="iMac:w-40 iMac:h-40 mb-5" key={4} />,
  ];

  return (
    <>
      <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
        <div className="iMac:mt-[15%] iMac:w-7/12 lg:mt-40 lg:w-6/12 ">
          <h2 className="iMac:text-7xl font-serif text-white lg:text-4xl">
            {title}
          </h2>
          <p className="iMac:text-4xl text-white lg:mt-4">{description}</p>
          <Button link={button.link} stylesBtn="iMac:mt-20 lg:mt-10">
            {button.text}
          </Button>
        </div>
        <div className="iMac:mt-80 lg:mt-20">
          <strong className="iMac:text-5xl block text-white lg:text-2xl">
            {advantages.title}
          </strong>
          <ul className="iMac:text-3xl iMac:gap-10 grid grid-cols-4 text-white lg:mt-10">
            {advantages.items.map((item, i) => (
              <li key={item} className="">
                {arrIcons[i]}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {pathImage !== undefined ? (
        <GatsbyImage
          image={pathImage}
          alt=""
          className="important-background  left-0 top-0 -z-50 h-screen w-screen"
        />
      ) : (
        ''
      )}
    </>
  );
}
