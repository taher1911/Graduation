import React from "react";
import { Circles } from "react-loader-spinner";

const mainLoader = "flex flex-col items-center justify-center mb-2";
// const sectionLoader = "flex flex-col items-center justify-center h-full w-full";
const Loading = ({}) => {
  return (
    <div className={mainLoader}>
      <Circles
        ariaLabel="circles-loading"
        color="#b965fa"
        height={50}
        width={200}
        className="m-5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
