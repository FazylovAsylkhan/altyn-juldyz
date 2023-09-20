import * as React from "react";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import Icon1 from "assets/icons/main-page-icons/advantages-1.svg";
import Icon2 from "assets/icons/main-page-icons/advantages-2.svg";
import Icon3 from "assets/icons/main-page-icons/advantages-3.svg";
import Icon4 from "assets/icons/main-page-icons/advantages-4.svg";
import { Button } from "common/components/button";

export interface ComfortJagalauProps {
  data: {
    title: string;
    description: string;
    image: ImageDataLike | null;
    button: {
      text: string;
      link: string;
    };
    advantages: {
      title: string;
      items: [string];
    };
  };
}

export function ComfortJagalau(props: ComfortJagalauProps): React.JSX.Element {
  const { title, description, image, button, advantages } = props.data;
  const pathImage = getImage(image);
  const arrIcons = [
    <Icon1 className="mb-5" key={1} />,
    <Icon2 className="mb-5" key={2} />,
    <Icon3 className="mb-5" key={3} />,
    <Icon4 className="mb-5" key={4} />,
  ];

  return (
    <>
      <div className="container mx-auto h-screen max-w-screen-xl">
        <div className=" mt-40 w-6/12 ">
          <h2 className="mb-4 text-4xl font-serif  text-white">{title}</h2>
          <p className="text-xl text-white">{description}</p>
          <Button link={button.link} stylesBtn="mt-10">
            {button.text}
          </Button>
        </div>
        <div className="mt-20">
          <strong className="block text-2xl text-white">
            {advantages.title}
          </strong>
          <ul className="mt-10 grid grid-cols-4 text-white">
            {advantages.items.map((item, i) => (
              <li key={item}>
                {arrIcons[i]}
                {item}
              </li>
            ))}
          </ul>
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
