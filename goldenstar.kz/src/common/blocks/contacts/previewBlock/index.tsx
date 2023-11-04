import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

interface PreviewBlockProps {
  data: {
    title: string;
    description: string;
    image: ImageDataLike | null;
  };
}

export function PreviewBlock(props: PreviewBlockProps) {
  const { title, description, image } = props.data;
  const pathImage = getImage(image);

  return (
    <div>
      <div className="iMac:max-w-iMac relative mx-auto h-screen text-white lg:max-w-screen-xl">
        <div className="absolute bottom-[10%] left-0">
          <h1 className="iMac:text-6xl text-4xl">{title}</h1>
          <p className="iMac:text-4xl iMac:mt-5 text-2xl">{description}</p>
        </div>
      </div>
      {pathImage !== undefined ? (
        <GatsbyImage
          image={pathImage}
          alt=""
          className="important-background left-0 top-0 -z-50 h-screen w-full"
        />
      ) : (
        ''
      )}
    </div>
  );
}
