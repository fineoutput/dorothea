"use client";

import React from "react";

import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import { motion } from "framer-motion";
function HeroSection() {
  const lineLoop = {
    hidden: {
      opacity: 0.5,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="h-screen">
      {/* first image */}
      <div className="relative h-screen">
        <img
          src=" https://i.ibb.co/3RN8wZ4/14.jpg"
          
          className="object-cover h-full w-full"
          sizes="100vw"
          alt="image-1"
        />
        <div className="absolute  z-10 bottom-0 left-0 w-full h-full flex justify-center items-end  bg-black/50">
          <div className="flex flex-col  justify-center items-center gap-4  w-full ">
            <span className="text-4xl xl:text-7xl w-full flex justify-center items-center  ">
              <SlideInFromBottom sequence={2}>
                <span className="font-junge w-[100vw] flex justify-center items-center text-center">
                  Bask in Tribal-Inspired Gastronomy at Dorothea
                </span>
              </SlideInFromBottom>
            </span>
            <span className="h-[150px] w-full   overflow-hidden flex justify-center items-center">
              <motion.span
                variants={lineLoop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className=" h-[150px] w-[1px] bg-white "
              ></motion.span>
            </span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default HeroSection;
