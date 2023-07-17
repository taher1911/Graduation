import Link from "next/link";
import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="text-center text-gray-100 w-[90%] max-w-[1200px] mx-auto p-10  bg-gradient-to-r from-pink-500 to-violet-500 mt-[10vh] md:mt-[15vh] xl:mt-[20vh] mb-10 rounded-xl">
      <h2 className="text-[1.5rem] font-bold tracking-wider">Lifetime plans</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 my-8 ">
        <div className=" border-[2px] rounded-xl border-gray-300 p-4 md:px-8 xl:px-16">
          <h3 className="text-xl font-semibold">Business Lifetime</h3>
          <p className="font-bold text-2xl  md:text-3xl my-4">
            $399
            <span className="text-[16px]">/ billed once</span>
          </p>
        </div>
        <div className=" border-[2px] rounded-xl border-gray-300 p-4 md:px-8 xl:px-16">
          <h3 className="text-xl font-semibold">Unlimited Lifetime</h3>
          <p className="font-bold text-2xl  md:text-3xl my-4">
            $1099
            <span className="text-[16px]">/ billed once</span>
          </p>
        </div>
      </div>
      <Link
        href="#Pricing-section"
        className="inline-flex items-center justify-center h-12 px-10 py-0 text-[15px] md:text-xl font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-solid rounded-full cursor-pointer select-none   focus:shadow-xs focus:no-underline bg-white text-black tracking-wider"
      >
        Get Lifetime Plan
      </Link>
      <p className="text-gray-800 mt-4">
        *Contact our team to grab this deal today
      </p>
    </section>
  );
};

export default Landing;
