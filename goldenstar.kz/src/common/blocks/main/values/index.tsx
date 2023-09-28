import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

export interface ValuesProps {
  data: {
    title: string;
    description: string;
    values: [{ title: string; description: string }];
    image: ImageDataLike | null;
  };
}

export function Values(props: ValuesProps): React.JSX.Element {
  const { title, description, image, values } = props.data;
  const pathImage = getImage(image);

  return (
    <>
      <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
        <div className="iMac:mt-[20rem] lg:mt-[10rem]">
          <h2 className="iMac:text-6xl font-bold text-white lg:text-4xl">
            {title}
          </h2>
          <p className="iMac:text-3xl text-white lg:mt-4 lg:w-8/12">
            {description}
          </p>
        </div>
        <div className="iMac:gap-10 iMac:mt-[30rem] grid grid-cols-4 lg:mt-[14rem]">
          {values.map((value) => {
            return (
              <div key={value.title}>
                <h4 className="iMac:text-4xl font-bold text-white lg:text-2xl">
                  {value.title}
                </h4>
                <p className="iMac:text-2xl iMac:mt-7 text-white lg:mt-3">
                  {value.description}
                </p>
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
