import * as React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

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
          <h2 className="mb-4 text-4xl font-serif font-bold text-white">
            {title}
          </h2>
          <p className="text-white w-7/12">{description}</p>
        </div>
        <div className="grid grid-cols-4 mt-[14rem]">
          {values.map((value) => {
            return (
              <div key={value.title}>
                <h4 className="text-white font-bold text-2xl">{value.title}</h4>
                <p className="text-white mt-3">{value.description}</p>
              </div>
            );
          })}
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
