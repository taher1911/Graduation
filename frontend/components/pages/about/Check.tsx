import Link from "next/link";
import React from "react";

type Props = {};

const Check = (props: Props) => {
  return (
    <section
      className="w-full  h-[500px]  text-white flex flex-col justify-center items-center relative overflow-hidden bg-fixed bg-cener  bg-cover my-14 md:my-20 text-center px-[10%]"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/freelancer3223/image/upload/v1687823206/gradProject/banner1-1_ief3lk.jpg)",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] absolute w-full h-full z-[0]"></div>
      <div className="z-10">
        <h4 className="text-xl md:text-3xl xl:text-5xl  font-bold">
          Check new AI based video content
        </h4>
        <p className="my-6 text-[14px] md:text-[16px] tracking-wider font-[500]">
          Detectiva aims to provide a reliable and effective solution to detect
          and identify deepfakes, helping individuals, businesses, and
          organizations to protect themselves from the potential harm caused by
          this technology. The slogan &quot;Be sure, and stay safe&quot;
          emphasizes the importance of being confident and secure in the
          authenticity of the media we encounter, especially in our digital age
          where information can spread quickly and easily. With Detectiva, users
          can have peace of mind knowing that they can trust the media they see
          and hear.
        </p>
        <Link
          href={``}
          className="mx-auto rounded-full block max-w-[250px] text-center capitalize font-bold tracking-wider text-[14px] md:text-[1.15rem] py-3 w-[100%] bg-gradient-to-r from-pink-500 to-violet-500  hover:scale-[1.03] transition-all duration-300"
          style={{ cursor: "pointer" }}
        >
          check any video
        </Link>
      </div>
    </section>
  );
};

export default Check;
