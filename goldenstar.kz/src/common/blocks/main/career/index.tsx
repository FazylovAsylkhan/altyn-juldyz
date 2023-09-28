import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Button } from 'common/components/button';

export interface CareerProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
    employees: {
      title: string;
      subtitle: string;
    };
    image: ImageDataLike | null;
  };
}

export function Career(props: CareerProps): React.JSX.Element {
  const { title, subtitle, description, image, button, employees } = props.data;
  const pathImage = getImage(image);

  return (
    <>
      <div className="iMac:max-w-iMac iMac:gap-20 mx-auto lg:max-w-screen-xl ">
        <div className="iMac:mt-32 flex flex-col lg:gap-12">
          <div className="iMac:text-5xl  font-bold text-white lg:mt-[15rem] lg:text-2xl">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p className="iMac:text-3xl font-normal lg:mt-3 lg:text-base">
              {description}
            </p>
          </div>
          <Button stylesBtn="w-fit">{button.text}</Button>
          <div>
            <h3 className="iMac:mt-20 text-white">
              <span className="iMac:text-9xl block font-bold lg:text-8xl">
                {employees.title}
              </span>
              <span className="iMac:text-3xl iMac:mt-10 block lg:mt-5">
                {employees.subtitle}
              </span>
            </h3>
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
