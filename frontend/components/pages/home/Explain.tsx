import React from "react";

type Props = {};

const Explain = (props: Props) => {
  return (
    <section className="mt-20 w-[90vw] min-h-[70vh] ">
      <div className="video relative max-w-[1300px] mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-[100vw] h-[80vh]  "
          style={{ zIndex: 0 }}
        >
          <source
            src="https://res.cloudinary.com/freelancer3223/video/upload/v1687709742/gradProject/AI_Power_-_After_Effects_Templates_-_Motion_Array_zysk8a.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Explain;
