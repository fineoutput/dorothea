/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import TableReservation from "./TableReservation";

const SpringModal = ({
  isOpen = true,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const card = {
    command: "Reserve a table",
    title:
      "Please take a moment to select the car type that best matches your interest and preferences. ",
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
          className="bg-gradient-dark backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-secondary-light p-6 xl:p-6 rounded-xl w-full max-w-full xl:max-w-[80%] shadow-xl cursor-default relative overflow-hidden"
          >
            <TableReservation setIsOpen={setIsOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
