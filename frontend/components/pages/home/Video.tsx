import React from "react";

type Props = {};

const Video = (props: Props) => {
  return (
    <section className=" my-12 md:my-20">
      <h2 className="text-center w-[90%] md:w-[70%] mx-auto text-xl md:text-3xl xl:text-4xl text-gray-200 mb-4 md:mb-8 leading-[1.5] tracking-wider font-semibold">
        The{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          quickest and most convenient
        </span>{" "}
        way to check your videos
      </h2>
      <div className="video relative max-w-[1280px] mx-auto ">
        <iframe
          width="1259"
          height="660"
          src="https://www.youtube.com/embed/n8ta5AE9Vfs"
          title="This is the platform Detectiva&#39;s introduction video."
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-[90%] h-[300px] md:h-[450px] xl:h-[660px] mx-auto 2xl:w-[1250px]"
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
