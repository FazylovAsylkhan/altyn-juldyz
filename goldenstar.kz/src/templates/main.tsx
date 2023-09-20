/* eslint-disable no-undef */
import * as React from "react";
import { graphql, PageProps, type HeadFC } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import {
  AltynJuldyz,
  Career,
  ComfortJagalau,
  Manufactory,
  OnlineShop,
  Values,
} from "common/blocks/main";
import { Header } from "common/components/share";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

const IndexPage = (
  props: PageProps<Queries.PageMainJson>
): React.JSX.Element => {
  const {
    altynJuldyz,
    comfortJagalau,
    manufactory,
    onlineShop,
    values,
    career,
  } = props.data.pageMainJson;

  return (
    <Swiper
      direction="vertical"
      pagination={{
        clickable: true,
        bulletClass: "pageSlider__bullet",
        bulletActiveClass: "pageSlider__bullet_active",
      }}
      modules={[Pagination, Mousewheel]}
      mousewheel
      speed={800}
      allowTouchMove={false}
      className="pageSlider"
    >
      <Header />
      <SwiperSlide>
        <AltynJuldyz data={altynJuldyz} />
      </SwiperSlide>
      <SwiperSlide>
        <ComfortJagalau data={comfortJagalau} />
      </SwiperSlide>
      <SwiperSlide>
        <Manufactory data={manufactory} />
      </SwiperSlide>
      <SwiperSlide>
        <OnlineShop data={onlineShop} />
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
  query PageMainQuery($lang: String) {
    pageMainJson(lang: { eq: $lang }) {
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
    }
  }
`;
