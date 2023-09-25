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
      <div className="container mx-auto h-screen max-w-screen-xl">
        <div className="mt-[10rem]">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="w-7/12 text-white">{description}</p>
        </div>
        <div className="mt-[14rem] grid grid-cols-4">
          {values.map((value) => {
            return (
              <div key={value.title}>
                <h4 className="text-2xl font-bold text-white">{value.title}</h4>
                <p className="mt-3 text-white">{value.description}</p>
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
