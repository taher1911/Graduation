import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  img: string;
  title: string;
  text: string;
};

const Step = ({ id, img, title, text }: Props) => {
  return (
    <div className="text-gray-200 flex py-5 px-3 gap-2 bg-[rgba(61,61,61,0.5)] rounded-3xl">
      <div className="relative w-[100px] h-[50px]">
        <Image src={img} alt="step" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="text-left">
        <h3 className="font-bold text-xl mb-3">
          {id}. {title}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Step;
