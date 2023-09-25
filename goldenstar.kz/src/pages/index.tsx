/* eslint-disable no-undef */
import * as React from 'react';
import { graphql, PageProps, type HeadFC } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import {
  AboutCompany,
  AltynJuldyz,
  Career,
  ComfortJagalau,
  Manufactory,
  OnlineShop,
  Values,
  ProjectsAltynJuldyz,
} from 'common/blocks/main';
import { Header } from 'common/components/share';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { toggleClass } from 'common/utils';

const IndexPage = (
  props: PageProps<Queries.PageMainJson>
): React.JSX.Element => {
  const [isLight, setIsLight] = React.useState(false);
  const {
    altynJuldyz,
    comfortJagalau,
    manufactory,
    onlineShop,
    values,
    career,
    aboutCompany,
    projectsAltynJuldyz,
  } = props.data.pageMainJson;
  const { buttonLangs, links } = props.data.headerJson;

  return (
    <Swiper
      direction="vertical"
      pagination={{
        clickable: true,
        bulletClass: 'pageSlider__bullet',
        bulletActiveClass: 'pageSlider__bullet_active',
        totalClass: 'pagination',
      }}
      modules={[Pagination, Mousewheel]}
      mousewheel
      speed={800}
      allowTouchMove={false}
      className="pageSlider"
      onSlideChange={(swiper) => {
        const currentNumberOfSlide = swiper.realIndex + 1;
        const changeableSlides = [5, 6];
        const isLightSlider = changeableSlides.includes(currentNumberOfSlide);
        setIsLight(isLightSlider);
        toggleClass(swiper.pagination.bullets, 'dark', isLightSlider);
      }}>
      <Header links={links} langButtonLangs={buttonLangs} isLight={isLight} />
      <SwiperSlide>
        <AltynJuldyz data={altynJuldyz} />
      </SwiperSlide>
      <SwiperSlide>
        <ComfortJagalau data={comfortJagalau} />
      </SwiperSlide>
      <SwiperSlide>
        <Manufactory data={manufactory} />
      </SwiperSlide>
      <SwiperSlide className="truncate">
        <OnlineShop data={onlineShop} />
      </SwiperSlide>
      <SwiperSlide>
        <AboutCompany data={aboutCompany} />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectsAltynJuldyz data={projectsAltynJuldyz} />
      </SwiperSlide>
      <SwiperSlide>
        <Values data={values} />
      </SwiperSlide>
      <SwiperSlide>
        <Career data={career} />
      </SwiperSlide>
    </Swiper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Главная</title>;

export const query = graphql`
  query PageMainQuery {
    headerJson(lang: { eq: "ru" }) {
      buttonLangs
      links {
        text
        url
        submenu {
          text
          url
          submenu {
            text
            url
          }
        }
      }
    }
    pageMainJson(lang: { eq: "ru" }) {
      altynJuldyz {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      comfortJagalau {
        title
        description
        button {
          link
          text
        }
        advantages {
          items
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      manufactory {
        title
        subTitle
        features {
          title
          description
          button {
            link
            text
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      onlineShop {
        title {
          main
          tail
        }
        subtitle {
          part1
          part2
          part3
        }
        button {
          link
          text
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      values {
        title
        description
        values {
          title
          description
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      career {
        title
        subtitle
        description
        employees {
          title
          subtitle
        }
        button {
          link
          text
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      aboutCompany {
        title
        box {
          title
          description
          button {
            link
            text
          }
        }
        advantages {
          title
          subtitle
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      projectsAltynJuldyz {
        title
        projects {
          title
          description
          button {
            text
            link
          }
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;
