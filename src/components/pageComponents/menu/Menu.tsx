"use client";

import Navbar from "@/components/common/Navbar";

import { useState } from "react";
import MenuDisplay1 from "./MenuDisplay1";
function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isModalImageOpen, setIsModalImageOpen] = useState(true);

  return (
    <div className=" min-h-screen h-full">
      <Navbar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isModalImageOpen={isModalImageOpen}
        setIsModalImageOpen={setIsModalImageOpen}
      />
      <MenuDisplay1 />
    </div>
  );
}

export default Menu;
