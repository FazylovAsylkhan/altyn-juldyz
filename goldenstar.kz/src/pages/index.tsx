import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Header } from 'common/components/share';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import { Pagination, Mousewheel } from 'swiper/modules';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
          bulletClass: 'page__bullet',
          bulletActiveClass: 'page__bullet_active',
        }}
        modules={[Pagination, Mousewheel]}
        mousewheel
        speed={800}
        allowTouchMove={false}
        className="h-screen w-full border-2">
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <div className=" ml-32 mt-96 w-5/12 ">
              <h1 className="text-gold mb-4 font-serif text-7xl font-bold">
                Altyn Juldyz
              </h1>
              <p className="text-gray-400">
                Группа компаний в Казахстане, вносящая огромный вклад в развитие
                разных отраслей страны
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Производство и торговля</h2>
            <p className="text-gray-400">
              Мы гордимся нашей швейно-обувной фабрикой, которая производит
              высококачественную одежду и обувь, учитывая последние модные
              тенденции и потребности клиентов. Кроме того, мы также
              предоставляем широкий ассортимент средств индивидуальной защиты,
              строительных инструментов и материалов, а также строительное
              оборудование и спортивные товары для различных отраслей.
            </p>
            <p className="text-gray-400">
              В каталоге интернет-магазина https://aforma.kz/ представлен
              широкий ассортимент средств индивидуальной защиты, которые
              соответствуют всем нормам и требованиям. Мы предлагаем
              исключительно качественные и надежные средства индивидуальной
              защиты.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Сельское хозяйство</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Строительство и проектирование</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">О компании</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Устойчивое развитие</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Ключивые проекты</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Наши партнеры</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Header />
          <div className="container mx-auto h-screen max-w-screen-xl">
            <h2 className="mt-20">Будьте с нами</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Главная</title>;
