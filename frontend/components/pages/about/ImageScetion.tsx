import React from "react";
import Link from "next/link";
type Props = {};

const ImageScetion = (props: Props) => {
  return (
    <Link
      href={""}
      className="block w-[90%] md:w-[80%] max-w-[1200px] h-[400px] md:h-[550px] mx-auto my-14 md:my-20  bg-[url(https://res.cloudinary.com/freelancer3223/image/upload/v1687822214/gradProject/Screenshot_127_xttwf9.png)] bg-cover bg-center bg-no-repeat hover:scale-[1.01] transition-all duration-300 rounded-3xl"
    >
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-end items-center">
        <h3 className="text-center text-gray-100 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl w-[70%] md:w-[60%] ">
          Try our service and check your videos.
        </h3>
      </div>
    </Link>
  );
};

export default ImageScetion;
