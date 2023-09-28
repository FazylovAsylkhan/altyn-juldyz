import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

export interface AltynJuldyzProps {
  data: {
    title: string;
    description: string;
    image: ImageDataLike | null;
  };
}

export function AltynJuldyz(props: AltynJuldyzProps): React.JSX.Element {
  const { title, description, image } = props.data;
  const pathImage = getImage(image);

  return (
    <>
      <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
        <div className="iMac:mt-[50%] iMac:w-6/12 lg:mt-[30rem] lg:w-5/12">
          <h1 className="iMac:mb-8 iMac:text-9xl font-serif font-bold text-white lg:text-7xl">
            {title}
          </h1>
          <p className="iMac:text-4xl text-white lg:mt-4">{description}</p>
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
