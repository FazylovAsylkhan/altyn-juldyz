import * as React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { Button } from "common/components/button";

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
      <div className="container mx-auto h-screen max-w-screen-xl">
        <div className="mt-[10rem] flex flex-row-reverse">
          <div>
            <h2>
              <div className="text-white text-[5rem] uppercase">
                {title.main}
              </div>
              <div className="text-white text-[5.47rem] uppercase -mt-12">
                {title.tail}
              </div>
            </h2>
            <h3 className="mt-5">
              <div className="uppercase text-white text-[3rem] ">
                {subtitle.part1}
              </div>
              <div className="uppercase text-white text-[3rem] -mt-6">
                {subtitle.part2}
              </div>
              <div className="uppercase text-white text-[3rem] font-bold -mt-6">
                {subtitle.part3}
              </div>
            </h3>
            <Button stylesBtn="mt-10">{button.text}</Button>
          </div>
        </div>
      </div>
      {pathImage !== undefined ? (
        <GatsbyImage
          image={pathImage}
          alt=""
          className="important-background  left-0 top-0 -z-50"
        />
      ) : (
        ""
      )}
    </>
  );
}
