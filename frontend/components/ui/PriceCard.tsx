import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
type Props = {
  id: number;
  popular: boolean;
  title: string;
  mPrice: number;
  yPrice: number;
  about: string;
  btnTxt: string;
  billedMonthly: string;
  billedAnnually: string;
  list: string[];
  isMonthly: boolean;
};

const PriceCard = ({
  id,
  popular,
  title,
  mPrice,
  yPrice,
  about,
  btnTxt,
  billedMonthly,
  billedAnnually,
  list,
  isMonthly,
}: Props) => {
  return (
    <div
      style={{ border: `2px solid ${popular ? "#aaa" : "#444"}` }}
      className="rounded-[30px] p-4 md:p-6 relative text-gray-200 w-[100%] lg:w-[31%] overflow-hidden"
    >
      {popular && (
        <span className="absolute text-[14px] md:text-[16px] w-[50%] rotate-45 -right-16 md:-right-12 bg-gradient-to-r from-pink-500 to-violet-500 text-center">
          Popular
        </span>
      )}

      <h3 className="text-white font-bold tracking-wider text-[1.2rem] md:text-[1.3rem]">
        {title}
      </h3>
      <p className="my-1 md:my-3 leading-6 tracking-wider text-[14px] md:text-[16px] w-[100%] md:w-[85%] ">
        {about}
      </p>
      <p className="font-bold text-2xl  md:text-3xl my-4">
        ${!isMonthly ? mPrice : yPrice}{" "}
        <span className="text-[16px]">/ mo*</span>
      </p>
      <Link
        href={``}
        className="mx-auto rounded-full block text-center  capitalize font-bold tracking-wider text-[1rem] md:text-[1.15rem] py-3 w-[100%] bg-gradient-to-r from-pink-500 to-violet-500 "
        style={{ cursor: "pointer" }}
      >
        {btnTxt}
      </Link>

      <p className="text-[14px] my-3">
        {mPrice > 0 && "$"}
        {!isMonthly ? billedMonthly : billedAnnually} {mPrice === 0 && "free"}
      </p>
      <ul className="my-6 text-[15px]">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-[13px] md:text-[16px]"
          >
            <span className="text-green-600 mr-3 my-3">
              <FaCheck />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
