import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <section
        className="w-full h-[70vh] md:h-[90vh]  text-white flex flex-col justify-center items-center relative overflow-hidden bg-fixed bg-[40%]  bg-cover"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/facial-recognition-system-woman-scanner-frame-face-information-186981643.jpg)",
        }}
      >
        <div className="absolute bg-[rgba(0,0,0,0.6)] z-10 left-0 top-0 right-0 bottom-0 flex  flex-col justify-center items-end text-gray-200 px-[3%] md:px-[10px] xl:px-[15%] ">
          <h2 className="md:w-[90%] text-center font-[600] text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.5] tracking-wider text-white">
            "Real Eyes, Realize, Real Lies:
            <br /> Stay Ahead of Deepfakes with{" "}
            <span className="bg-gradient-to-r  from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Detectiva
            </span>
            "
          </h2>
        </div>
      </section>
      <div className="w-[90%] md:w-[80%] mx-auto rounded-3xl px-6 py-8 md:p-12 text-center -mt-[5rem]  bg-[#04141a] z-20">
        <h3 className="text-[#e2e9eb] font-[600] text-[1.2rem] lg:text-[36px] ">
          Be sure, and stay safe.
        </h3>
        <span className="w-[100px] inline-block h-1 bg-gradient-to-r from-pink-500 to-violet-500"></span>
        <p className="text-gray-200 mt-6 md:mt-10 leading-8 md:w-[80%] text-[14px] md:text-[16px] mx-auto">
          Detectiva is a deepfake detection platform that uses advanced
          artificial intelligence and machine learning techniques to analyze
          media files and determine their authenticity. The platform has a
          user-friendly interface that makes it easy for individuals,
          businesses, and organizations to use and customize according to their
          needs
        </p>
      </div>
    </>
  );
};

export default Landing;
