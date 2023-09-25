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
      <div className="container mx-auto flex h-screen max-w-screen-xl flex-col gap-12">
        <div className="mt-[15rem]  text-white ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <h4 className="text-2xl font-bold">{subtitle}</h4>
          <p className="mt-3">{description}</p>
        </div>
        <Button stylesBtn="w-fit">{button.text}</Button>
        <div>
          <h3 className="text-white">
            <span className="block text-8xl font-bold">{employees.title}</span>{' '}
            <span className="mt-5">{employees.subtitle}</span>
          </h3>
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
