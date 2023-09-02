import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Header, Footer } from 'common/components/share';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container mx-auto grid h-screen max-w-screen-xl">
      <Header />
      <main className="mb-44">
        <div className="ml-32 mt-96 w-5/12">
          <h1 className="text-gold mb-4 font-serif text-7xl font-bold">
            Altyn Juldyz
          </h1>
          <p className="text-gray-400">
            Группа компаний в Казахстане, вносящая огромный вклад в развитие
            разных отраслей страны
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
