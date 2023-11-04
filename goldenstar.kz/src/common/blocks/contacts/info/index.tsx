import * as React from 'react';

interface InfoProps {
  data: {
    box1: {
      title: string;
      description: string;
    };
    box2: [
      {
        title: string;
        values: string[];
      },
    ];
  };
}

export function Info(props: InfoProps) {
  const { box1, box2 } = props.data;
  const { title, description } = box1;

  return (
    <div className="iMac:max-w-iMac mx-auto gap-10 py-20 text-black lg:max-w-screen-xl">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="iMac:text-6xl text-4xl font-bold">{title}</h1>
          <p className="iMac:text-4xl iMac:mt-15 mt-10 text-2xl">
            {description}
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-10">
            {box2.map((item) => {
              return (
                <li key={item.title} className="iMac:mt-6 mt-4">
                  <div className="iMac:text-4xl text-2xl font-bold">
                    {item.title}
                  </div>
                  <div className="border-gold iMac:text-2xl iMac:mt-4 iMac:gap-2 mt-2 flex flex-col border-b-2 pb-4">
                    {item.values.map((value) => {
                      return (
                        <div key={value} className="text-[#6D7F8E]">
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
