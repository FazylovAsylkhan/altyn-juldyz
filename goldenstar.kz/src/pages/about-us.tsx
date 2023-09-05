import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from 'common/components/share';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="container mx-auto grid h-screen max-w-screen-xl">
      <Layout>
        <main className="container mx-auto mb-44 h-screen max-w-screen-xl">
          <div className="ml-32 mt-96 w-5/12">
            <h1 className="text-gold mb-4 font-serif text-7xl">О нас</h1>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>О нас</title>;
