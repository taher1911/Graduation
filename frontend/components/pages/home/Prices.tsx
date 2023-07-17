import PriceCard from "@/components/ui/PriceCard";
import React, { useState } from "react";

type Props = {};

const data = [
  {
    id: 1,
    popular: false,
    title: "Free",
    mPrice: 0,
    yPrice: 0,
    about: "For anyone who wishes to try Detectiva app",
    btnTxt: "get started",
    billedMonthly: "",
    billedAnnually: "",
    list: [
      "Cloud usage: $5/hour (approx. $10/video detection)",
      "Advanced mode: -",
      "Detection Time: 3 Hours",
      "Limitation for videos and images: 50MB, 90 second video",
      "Simultaneous Detection: 1 Video",
      "Video retention period: 50 days",
    ],
  },
  {
    id: 2,
    popular: true,
    title: "Business",
    mPrice: 30,
    yPrice: 15,
    about: "For small business, educators and influencers",
    btnTxt: "get Business",
    billedMonthly: "*Billed monthly until cancelled",
    billedAnnually: "*Billed $180 annually",
    list: [
      "Cloud usage: $10/hour (approx. $20/video detection)",
      "Advanced mode: -",
      "Detection Time: 1 Hour",
      "Limitation for videos and images: 200MB, 300 second video",
      "Simultaneous Detection: 5 Video",
      "Video retention period: 200 days",
    ],
  },
  {
    id: 3,
    popular: false,
    title: "Unlimited",
    mPrice: 60,
    yPrice: 30,
    about: "For agencies and larger teams",
    btnTxt: "get unlimited",
    billedMonthly: "*Billed monthly until cancelled",
    billedAnnually: "*Billed $360 annually",
    list: [
      "Cloud usage: $15/hour (approx. $30/video detection)",
      "Advanced mode: -",
      "Detection Time: Less than 1 hour  ",
      "Limitation for videos and images: 500MB, 1000 second video",
      "Simultaneous Detection: 10 Video",
      "Video retention period: No limit",
    ],
  },
];
const Prices = (props: Props) => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="my-10 w-[90%] mt-0 md:mt-10 pt-10" id="Pricing-section">
      <h2 className="text-center  mx-auto text-xl md:text-3xl xl:text-4xl  text-gray-200 mb-8 leading-[1.5] tracking-wider font-semibold">
        The right plans,
        <span className="bg-gradient-to-r inline md:block from-pink-500 to-violet-500 bg-clip-text text-transparent">
          for the right price
        </span>{" "}
      </h2>
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 p-1 rounded-full font-bold text-[14px] md:text-xl">
          <button
            className="py-2 px-4 cursor-pointer rounded-full tracking-wider "
            style={{
              background: isMonthly ? "transparent" : "#eee",
              color: isMonthly ? "#fff" : "black",
            }}
            onClick={() => setIsMonthly(false)}
          >
            Monthly
          </button>
          <button
            className="py-2 px-4 cursor-pointer rounded-full tracking-wider"
            style={{
              background: isMonthly ? "#eee" : "transparent",
              color: isMonthly ? "black" : "#eee",
            }}
            onClick={() => setIsMonthly(true)}
          >
            Yearly{" "}
            <span className=" bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Save 50%
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex flex-col gap-y-6 lg:flex-row justify-between max-w-[1200px] mx-auto">
        {data.map((el) => (
          <PriceCard
            key={el.id}
            id={el.id}
            popular={el.popular}
            title={el.title}
            mPrice={el.mPrice}
            yPrice={el.yPrice}
            about={el.about}
            btnTxt={el.btnTxt}
            billedMonthly={el.billedMonthly}
            billedAnnually={el.billedAnnually}
            list={el.list}
            isMonthly={isMonthly}
          />
        ))}
      </div>
    </section>
  );
};

export default Prices;
