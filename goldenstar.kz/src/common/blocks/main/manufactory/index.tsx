import * as React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { Button } from "common/components/button";
import Icon1 from "assets/icons/main-page-icons/manufacture-feature-1.svg";
import Icon2 from "assets/icons/main-page-icons/manufacture-feature-2.svg";

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
      }
    ];
  };
}

export function Manufactory(props: ManufactoryProps): React.JSX.Element {
  const { title, subTitle, image, features } = props.data;
  const pathImage = getImage(image);
  const arrIcons = [<Icon1 key={1} />, <Icon2 key={2} />];

  return (
    <>
      <div className="container mx-auto h-screen max-w-screen-xl">
        <div className="mt-[10rem]">
          <h2 className="font-serif text-4xl font-bold text-white">{title}</h2>
          <h4 className="text-white font-bold text-xl">{subTitle}</h4>
        </div>
        <div>
          {features.map((feature, i) => {
            return (
              <div
                className="mt-10 flex items-center gap-5 w-fit"
                key={feature.title}
              >
                <div>{arrIcons[i]}</div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-white text-2xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-white w-7/12">{feature.description}</p>
                  <Button stylesBtn="w-fit">{feature.button.text}</Button>
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
          className="important-background  left-0 top-0 -z-50"
        />
      ) : (
        ""
      )}
    </>
  );
}
