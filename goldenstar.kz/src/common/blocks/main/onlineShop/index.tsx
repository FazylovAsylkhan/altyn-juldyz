import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Button } from 'common/components/button';

export interface OnlineShopProps {
  data: {
    title: {
      main: string;
      tail: string;
    };
    subtitle: {
      part1: string;
      part2: string;
      part3: string;
    };
    button: {
      text: string;
      link: string;
    };
    image: ImageDataLike | null;
  };
}

export function OnlineShop(props: OnlineShopProps): React.JSX.Element {
  const { title, subtitle, image, button } = props.data;
  const pathImage = getImage(image);

  return (
    <>
      <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
        <div className="iMac:mt-[20rem] mt-[10rem] flex flex-row-reverse">
          <div>
            <h2 className="uppercase text-white">
              <div className="iMac:text-[9rem] lg:text-[5rem]">
                {title.main}
              </div>
              <div className="iMac:text-[9.6rem] iMac:-mt-24 lg:-mt-12 lg:text-[5.47rem] ">
                {title.tail}
              </div>
            </h2>
            <h3 className="iMac:text-[6rem] uppercase text-white  lg:mt-5 lg:text-[3rem]">
              <div>{subtitle.part1}</div>
              <div className="iMac:-mt-12 lg:-mt-6">{subtitle.part2}</div>
              <div className="iMac:-mt-12 font-bold lg:-mt-6">
                {subtitle.part3}
              </div>
            </h3>
            <Button stylesBtn="lg:mt-10">{button.text}</Button>
          </div>
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
