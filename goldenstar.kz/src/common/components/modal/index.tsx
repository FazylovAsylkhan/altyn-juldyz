import React from 'react';

interface ModalProps {
  onClick: () => void;
  data: {
    title: string;
    description: string;
    closeButton: string;
  };
}

export function Modal(props: ModalProps) {
  const { onClick, data } = props;
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70">
      <div className=" flex h-80 flex-col items-center justify-center gap-10 rounded-lg bg-white px-20 py-10">
        <h3 className="text-4xl font-bold ">{data.title}</h3>
        <p className="mt-10 text-gray-500">{data.description}</p>
        <button
          onClick={onClick}
          className="bg-gold iMac:text-2xl rounded-lg px-20 py-3 text-white">
          {data.closeButton}
        </button>
      </div>
    </div>
  );
}
