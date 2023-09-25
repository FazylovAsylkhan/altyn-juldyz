import * as React from 'react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Button } from 'common/components/button';

export interface AboutCompanyProps {
  data: {
    title: string;
    box: {
      title: string;
      description: string;
      button: {
        text: string;
        link: string;
      };
    };
    advantages: [
      {
        title: string;
        subtitle: string;
      },
    ];
    image: ImageDataLike | null;
  };
}

export function AboutCompany(props: AboutCompanyProps): React.JSX.Element {
  const { title, box, advantages, image } = props.data;
  const pathImage = getImage(image);

  return (
    <div className="container mx-auto h-screen max-w-screen-xl">
      <h2 className="mt-[10rem] text-3xl font-bold">{title}</h2>

      <div className="relative">
        {pathImage !== undefined ? (
          <GatsbyImage image={pathImage} alt="" className="mt-10" />
        ) : (
          ''
        )}
        <div className="absolute -bottom-10 right-0 flex h-fit w-5/12  flex-col gap-3 rounded-tl-3xl bg-white p-5">
          <h4 className="text-2xl font-bold">{box.title}</h4>
          <p className="">{box.description}</p>
          <Button stylesBtn="w-fit">{box.button.text}</Button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {advantages.map((advantage) => {
          return (
            <div className="mt-10" key={advantage.title}>
              <h5 className="text-3xl font-bold">{advantage.title}</h5>
              <p>{advantage.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
