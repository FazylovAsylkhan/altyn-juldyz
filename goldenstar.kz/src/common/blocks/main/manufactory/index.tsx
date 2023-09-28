import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Button } from 'common/components/button';
import Icon1 from 'assets/icons/main-page-icons/manufacture-feature-1.svg';
import Icon2 from 'assets/icons/main-page-icons/manufacture-feature-2.svg';

export interface ManufactoryProps {
  data: {
    title: string;
    subTitle: string;
    image: ImageDataLike | null;
    features: [
      {
        title: string;
        description: string;
        button: {
          text: string;
          link: string;
        };
      },
    ];
  };
}

export function Manufactory(props: ManufactoryProps): React.JSX.Element {
  const { title, subTitle, image, features } = props.data;
  const pathImage = getImage(image);
  const arrIcons = [<Icon1 key={1} />, <Icon2 key={2} />];

  return (
    <>
      <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
        <div className="iMac:mt-[20rem] lg:mt-[10rem]">
          <h2 className="iMac:text-7xl font-serif font-bold text-white lg:text-4xl">
            {title}
          </h2>
          <h4 className="iMac:text-4xl font-bold text-white">{subTitle}</h4>
        </div>
        <div className="iMac:gap-40 iMac:mt-20 flex lg:gap-10">
          {features.map((feature, i) => {
            return (
              <div
                className="iMac:max-w-6/12  iMac:gap-10 flex w-fit gap-5 lg:mt-10"
                key={feature.title}>
                <div>{arrIcons[i]}</div>
                <div className="flex flex-col">
                  <h3 className="iMac:text-5xl font-bold text-white lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="iMac:text-3xl w-full text-white lg:mt-5">
                    {feature.description}
                  </p>
                  <Button stylesBtn="w-fit lg:mt-20 iMac:mt-32">
                    {feature.button.text}
                  </Button>
                </div>
              </div>
            );
          })}
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
