import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Button } from 'common/components/button';

export interface AboutCompanyProps {
  data: {
    title: string;
    box: {
      title: string;
      description: string;
      button: {
        text: string;
        link: string;
      };
    };
    advantages: [
      {
        title: string;
        subtitle: string;
      },
    ];
    image: ImageDataLike | null;
  };
}

export function AboutCompany(props: AboutCompanyProps): React.JSX.Element {
  const { title, box, advantages, image } = props.data;
  const pathImage = getImage(image);

  return (
    <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
      <h2 className="iMac:mt-[20rem] iMac:text-6xl font-bold lg:mt-[10rem] lg:text-3xl">
        {title}
      </h2>
      <div className="relative">
        {pathImage !== undefined ? (
          <GatsbyImage
            image={pathImage}
            alt=""
            className="iMac:w-full iMac:h-[42rem] lg:mt-10"
          />
        ) : (
          ''
        )}
        <div className="iMac:gap-10 iMac:p-10 iMac:-bottom-16 iMac:w-6/12 absolute flex h-fit  flex-col rounded-tl-3xl bg-white lg:-bottom-10 lg:right-0 lg:w-5/12 lg:gap-3 lg:p-5">
          <h4 className="iMac:text-5xl font-bold lg:text-2xl">{box.title}</h4>
          <p className="iMac:text-3xl">{box.description}</p>
          <Button stylesBtn="w-fit">{box.button.text}</Button>
        </div>
      </div>
      <div className="iMac:mt-20 grid grid-cols-4 lg:mt-10">
        {advantages.map((advantage) => {
          return (
            <div key={advantage.title}>
              <h5 className="iMac:text-5xl font-bold lg:text-3xl">
                {advantage.title}
              </h5>
              <p className="iMac:text-2xl">{advantage.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
