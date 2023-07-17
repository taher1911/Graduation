import React from "react";
import Image from "next/image";

type Props = {};

const Mobile = (props: Props) => {
  return (
    <>
      <section className="relative  md:my-10 w-[95%]  md:w-[90%] max-w-[1300px] ">
        <h2 className="text-center order-2 md:order-1  mx-auto text-xl md:text-3xl xl:text-4xl text-gray-200 mb-8 leading-[1.5] tracking-wider font-semibold">
          Detectiva{" "}
          <span className="bg-gradient-to-r md:block from-pink-500 to-violet-500 bg-clip-text text-transparent">
            mobile app
          </span>
        </h2>
        <div className=" pt-[320px] md:pt-12 relative mt-[9rem] px-4 md:px-10 py-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl text-white flex flex-col md:flex-row justify-between  items-center">
          <h3 className="  md:w-[30%] font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl flex md:justify-items-end">
            <span className="md:text-center">Check on the go</span>
          </h3>
          <div className="order-1 md:order-2 absolute z-10 left-[50%] top-[11%] md:top-[50%] -translate-x-[50%] -translate-y-[50%] w-[300px] lg:w-[450px] xl:w-[500px] h-[400px] lg:h-[450px] xl:h-[650px]">
            <div className="relative w-full h-full">
              <Image
                src="https://res.cloudinary.com/freelancer3223/image/upload/v1687700216/gradProject/iv-app-banner-3x_tdrrhj.png"
                alt="mobile"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="md:w-[32%] order-3">
            <h3 className="text-5xl font-bold flex flex-col justify-center text-center md:text-left">
              <span>6M</span>{" "}
              <span className="block text-[14px] ">Downloads</span>
            </h3>

            <p className="my-7 text-[15px] md:text-[16px]  lg:text-xl  font-semibold tracking-wider leading-9">
              The simplest way to check videos on your phone.
              <span className="text-gray-300  ">
                Use innovative technologies and algorithms developed
                specifically for our clients.
              </span>{" "}
            </p>
            <div className="flex gap-3">
              <button className="relative w-[120px] md:w-[160px] min-h-[55px]">
                <Image
                  src="https://res.cloudinary.com/freelancer3223/image/upload/v1687705133/gradProject/apple-store-transparent_lrvx1l.svg"
                  alt="app"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
              <button className="relative w-[120px] md:w-[160px] min-h-[55px]">
                <Image
                  src="https://res.cloudinary.com/freelancer3223/image/upload/v1687705134/gradProject/play-store-transparent_ctatpb.svg"
                  alt="app"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
