import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';
import { Button } from 'common/components/button';

export interface ProjectsAltynJuldyzProps {
  data: {
    title: string;
    projects: [
      {
        title: string;
        description: string;
        button: {
          text: string;
          link: string;
        };
        image: ImageDataLike | null;
      },
    ];
  };
}

export function ProjectsAltynJuldyz(
  props: ProjectsAltynJuldyzProps
): React.JSX.Element {
  const { title, projects } = props.data;
  return (
    <>
      <div className="container mx-auto h-screen max-w-screen-xl">
        <h2 className="mt-[10rem] text-3xl font-bold">{title}</h2>
        <Swiper
          direction="horizontal"
          spaceBetween={120}
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="projectsSlider">
          {projects.map((project) => {
            const pathImage = getImage(project.image);

            return (
              <SwiperSlide key={project.title}>
                <div className="flex gap-[5rem]">
                  {pathImage !== undefined ? (
                    <GatsbyImage image={pathImage} className="" alt="" />
                  ) : (
                    ''
                  )}
                  <div className="mt-10 w-5/12 pr-7">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="mt-5 text-gray-500">{project.description}</p>
                    <Button stylesBtn="mt-5">{project.button.text}</Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
