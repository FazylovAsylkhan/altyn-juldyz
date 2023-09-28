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
      <div className="iMac:max-w-iMac mx-auto lg:max-w-screen-xl">
        <h2 className="iMac:mt-[20rem] iMac:text-6xl font-bold lg:mt-[10rem] lg:text-3xl">
          {title}
        </h2>
        <Swiper
          direction="horizontal"
          spaceBetween={120}
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="projectsSlider iMac:mt-20">
          {projects.map((project) => {
            const pathImage = getImage(project.image);

            return (
              <SwiperSlide key={project.title}>
                <div className="flex lg:gap-[5rem]">
                  {pathImage !== undefined ? (
                    <GatsbyImage
                      image={pathImage}
                      className="iMac:h-[50rem] iMac:w-[80rem]"
                      alt=""
                    />
                  ) : (
                    ''
                  )}
                  <div className="iMac:pr-20 lg:mt-10 lg:w-5/12 lg:pr-7">
                    <h3 className="iMac:text-4xl font-bold lg:text-3xl">
                      {project.title}
                    </h3>
                    <p className="iMac:text-2xl text-gray-500 lg:mt-5">
                      {project.description}
                    </p>
                    <Button stylesBtn="lg:mt-5">{project.button.text}</Button>
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
