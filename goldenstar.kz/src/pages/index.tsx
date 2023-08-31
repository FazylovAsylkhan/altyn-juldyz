import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <header className="mb-10 flex h-14 items-center justify-between rounded-lg border-b-2 pt-2">
        <div className="w-2/5 pl-11">logo</div>
        <ul className="flex w-2/5 justify-between pr-11">
          <li>
            <a href="#" className="px-2">
              Главная
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              Направления
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              О нас
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              Вакансии
            </a>
          </li>
          <li>
            <a href="#" className="px-2">
              Контакты
            </a>
          </li>
        </ul>
      </header>
      <main>
        <div className="ml-32 mt-96 w-4/12">
          <h1 className="mb-4 text-7xl font-bold">Altyn Juldyz</h1>
          <p className="">
            Группа компаний в Казахстане, вносящая огромный вклад в развитие
            разных отраслей страны
          </p>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
