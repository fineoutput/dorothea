/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { IoClose as CrossIcon } from "react-icons/io5";

const SpringModalImage = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const card = {
    command: "Reserve a table",
    title:
      "Please take a moment to select the car type that best matches your interest and preferences. ",
    option1: { title: "Pre-owned Cars", href: "/collection" },
    option2: { title: "New Cars", href: "/new-cars" },
  };
  const image = "https://i.ibb.co/FXdh8qv/DOROTHEA-STORY-IMAGE.jpg";
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-transparent backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <button
            title="button"
            className=" absolute top-4 right-4"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CrossIcon className="h-8 w-8 xl:h-12 xl:w-12" />
          </button>
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] md:max-h-[852px] h-full xl:max-h-[1066px]   w-full max-w-[90vw] md:max-w-[480px] xl:max-w-[600px] shadow-xl  relative  overflow-hidden rounded-xl"
          >
            <Image
              src={image}
              fill
              objectFit="contain"
              alt="image"
              className=" rounded-xl max-h-[90vh] md:max-h-[852px] h-full xl:max-h-[1066px]   w-full max-w-[90vw] md:max-w-[480px] xl:max-w-[600px]  "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModalImage;
