import React from "react";
import Step from "./Step";

type Props = {};
const STEPS = [
  {
    id: 1,
    img: "https://hoodem.com/wp-content/uploads/2021/10/uploadvideoiconNEW.png",
    title: "Select your video",
    text: "Upload any video from your device. It can be up to 2 minutes long.",
  },
  {
    id: 2,
    img: "https://hoodem.com/wp-content/uploads/2021/10/uploadvideoiconNEW.png",
    title: "Starting analysis ",
    text: "After uploading the video, begin the video review process.",
  },
  {
    id: 3,
    img: "https://hoodem.com/wp-content/uploads/2021/10/uploadvideoiconNEW.png",
    title: "Get the result:",
    text: "After the video is finished processing, enjoy the video result!",
  },
];
const Steps = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-between my-12 md:my-20  w-[90%] max-w-[1200px] mx-auto  ">
      <h3 className="text-center   mx-auto text-xl md:text-3xl xl:text-4xl text-gray-200 mb-8 leading-[1.5] tracking-wider font-semibold">
        How to check your{" "}
        <span className="bg-gradient-to-r block from-pink-500 to-violet-500 bg-clip-text text-transparent">
          deepfake video
        </span>{" "}
      </h3>
      <div className="text-center ">
        {" "}
        <div className="w-full flex flex-col md:flex-row justify-between py-12 pt-2 gap-6">
          {STEPS.map((step) => (
            <Step
              key={step.id}
              id={step.id}
              img={step.img}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
        <a
          href="#_"
          className="inline-flex items-center justify-center h-14 px-10 py-0 text-[14px] md:text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-500 border-solid rounded-full cursor-pointer select-none  hover:border-gray-300 focus:shadow-xs focus:no-underline"
        >
          Check your video
        </a>
      </div>
    </section>
  );
};

export default Steps;
