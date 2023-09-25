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
      <div className="container mx-auto h-screen max-w-screen-xl">
        <div className="mt-[30rem] w-5/12 ">
          <h1 className="mb-4 font-serif text-7xl font-bold text-white">
            {title}
          </h1>
          <p className="text-white">{description}</p>
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
