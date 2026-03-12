/* eslint-disable @typescript-eslint/no-explicit-any */
// import RomanNumberAnimation from "@/components/website-specific-common-components/RomanNumberAnimation";
"use client";
import React from "react";
import ScrollingTestimonials from "./ScrollingTestimonials";
import WordAnimation from "@/components/website-specific-common-components/WordAnimation";

function Section1({ setIsModalOpen }: { setIsModalOpen: any }) {
  const text1 =
    "A refined dining haven, seamlessly blends tribal elegance and bohemian chic";
  // const text1 =
  //   "A.refined.dining.haven,.seamlessly.blends.tribal.elegance.and.bohemian.chic";
  const text2 =
    "Every detail, expertly curated, blends refinement and creative expression, yielding an immersive experience that awakens the senses.";
  // const text2 =
  //   "Every.detail,.expertly.curated,.blends.refinement.and.creative.expression,.yielding.an.immersive.experience.that.awakens.the.senses.";
  return (
    <div className=" pb-32 xl:pb-4 py-4 h-auto xl:h-[150vh]  flex flex-col justify-center items-center bg-[#E8E6E0] relative">
      {/* <RomanNumberAnimation text="gastro" romanNumber="I" /> */}
      <div className="xl:w-[50%]">
        <WordAnimation
          customClassName={
            "text-xl xl:text-5xl font-junge text-secondary-dark "
          }
          text={text1}
        />
      </div>
      <ScrollingTestimonials />
      <div className="xl:w-[50%]">
        <WordAnimation
          customClassName={
            "  text-xl xl:text-5xl font-junge text-secondary-dark"
          }
          text={text2}
        />
      </div>

      {/* <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="hover:scale-125 bg-gradient-dark transition-all hover:bg-secondary-dark duration-300 ease-in-out cursor-pointer w-[100px] rounded-full p-8 px-[3.5rem] flex justify-center item-center "
      >
        Reserve
        <br />
        Now!
      </button> */}
      <div className=" absolute bottom-4 xl:bottom-0 left-0 z-10 w-screen h-fit flex justify-center items-center">
        {" "}
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="  hover:scale-125 bg-gradient-dark transition-all hover:bg-secondary-dark duration-300 ease-in-out cursor-pointer w-[100px] rounded-full p-8 px-[3.5rem] flex justify-center item-center "
        >
          Reserve
          <br />
          Now!
        </button>
      </div>
    </div>
  );
}

export default Section1;
