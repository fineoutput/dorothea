/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { ReactNode, ReactSVGElement, useRef } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";

interface SocialLinksType {
  href: string;
  icon: ReactNode; // ReactNode allows any valid JSX element to be passed as the icon
  title: string;
}
import { TbMessageDots as MessageIcon } from "react-icons/tb";

import { FiPhoneIncoming as PhoneIcon } from "react-icons/fi";
import { IoMailOpenOutline as MailIcon } from "react-icons/io5";
import { GrLocation as LocationIcon } from "react-icons/gr";
import foodImage from "../../assets/images/footer/food-image-footer.png";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

function Footer({ footerData }: any) {
  const CopyrightSectionData = {
    brandName: "Dorothea",
    websiteCreator: { link: "https://digitalfry.in", name: "Digital Fry" },
    privacyPolicyUrl: "/",
    termsAndConditionsUrl: "/",
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // offset: ["start end", "end start"],
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "90deg"]);

  return (
    <div
      id="contact"
      className=" bg-gradient-dark text-white gap-4 flex flex-col "
    >
      <motion.div
        ref={targetRef}
        style={{ rotate }}
        className="flex justify-center items-center max-h-[250px]  -mt-24  "
      >
        <img
          className="object-fit   "
          src="https://i.ibb.co/3p6s3nB/food-image-footer.png"
          alt="food image"
        />
      </motion.div>
      <div className="pt-32 grid grid-cols-2 xl:grid-cols-4 justify-center items-start max-w-[80%] mx-auto gap-20 pb-24">
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <MessageIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            ABOUT DOROTHEA
          </div>
          <Link
            href="/#about"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center xl:max-w-[175px]"
          >
            Enjoy a wonderful cafe dining experience
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <PhoneIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            {"LET'S TALK"}
          </div>
          <Link
            href="tel:+917976769655"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center"
          >
            Phone: +91-79767 69655
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <MailIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            BOOK A TABLE
          </div>
          <Link
            href="mailto:dorotheajaipur@gmail.com"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center"
          >
            dorotheajaipur@gmail.com
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center  mx-auto">
          <LocationIcon className="h-8 w-8 mb-2" />
          <div className="font-semibold text-xl w-full text-center">
            CONTACT US
          </div>
          <Link
            href="/"
            className="hover:scale-105 transition-all duration-300 ease-in-out hover:text-gold text-sm text-center"
          >
            Plot no- 10A, Santosh Vihar, Jagatpura, Jaipur, India, 302033
          </Link>
        </div>
      </div>

      {/* copyright section */}
      <div className=" flex justify-center items-center bg-gradient-dark ">
        <CopyrightSection data={CopyrightSectionData} />
      </div>
    </div>
  );
}

export default Footer;

function SocialIconLink({ item }: { item: SocialLinksType }) {
  return (
    <Link
      href={item.href}
      className="group flex justify-center items-center w-full    "
    >
      <div className="p-4 group-hover:bg-white/10 rounded-xl  group-hover:scale-105 flex gap-4 justify-between items-center transition-all  duration-500 ease-in-out">
        <div className="flex justify-start gap-3 items-center ">
          {item.icon}
          <span className="flex items-center justify-center">
            {item.title.toUpperCase()}
          </span>
        </div>
        <LinkArrow className="fill-white h-6 w-6 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0 -translate-x-2 -rotate-45" />
      </div>
    </Link>
  );
}

function FooterColumns({ item }: any) {
  return (
    <div className="p-2 ">
      <div className="text-center font-semibold mb-8 tracking-widest text-xl">
        {item.heading.toUpperCase()}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-[12px] ">
        {item.subLinks.map((subLink: any, subIndex: any) => (
          <Link
            className="hover:scale-125 transition ease-in-out duration-500 text-white/50 hover:text-white"
            key={subIndex}
            href={subLink.href}
          >
            {subLink.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}

function CopyrightSection({ data }: any) {
  return (
    <div className="content-box py-8 w-full flex flex-col gap-4 lg:flex-row justify-between items-center text-[#A6A3A1] tracking-wide text-sm ">
      <div className="flex lg:flex-row lg:gap-8 lg:items-center flex-col gap-4   justify-center lg:justify-start items-start w-full">
        <span className="text-white  w-full md:w-auto text-center md:text-left">
          Copyright &copy; 2024 {data.brandName}{" "}
        </span>
        <div className="flex w-full xl:max-w-[30%]  gap-8 justify-center mx-auto xl:mx-0 xl:gap-8  items-center  ">
          <Link
            className="hover:text-white/80 transition hover:scale-105 ease-in-out duration-500"
            href={data.privacyPolicyUrl}
          >
            Privacy Policy
          </Link>
          {/*
          <Link href="/sell"> Cancellation & Refund</Link> */}

          <Link
            className="hover:text-white/80 transition hover:scale-105 ease-in-out duration-500 "
            href={data.termsAndConditionsUrl}
          >
            {" "}
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className=" w-full flex justify-center gap-1 items-centerw-full max-w-[250px] mx-auto py-6 xl:py-0">
        Website Developed by{"  "}
        <Link
          href={data.websiteCreator.link}
          className="hover:text-white transition-all hover:scale-105 ease-in-out duration-500 hover:tracking-wider text-white"
        >
          {data.websiteCreator.name}
        </Link>
      </div>
    </div>
  );
}
