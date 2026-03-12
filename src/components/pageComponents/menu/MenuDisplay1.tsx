"use client";
import { useState } from "react";

import Image from "next/image";

const MenuDisplay1 = () => {
  const breakfastMenuImages = [
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/breakfast/01.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/breakfast/02.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/breakfast/03.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/breakfast/04.png",
  ];

  const foodMenuImages = [
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/01.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/02.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/03.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/04.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/05.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/06.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/07.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/08.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/09.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/10.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/11.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/12.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/13.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/14.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/15.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/16.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/17.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/18.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/19.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/20.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/21.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/22.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/23.png",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/food/24.png",
  ];

  const drinkMenuImages = [
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-01.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-02.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-03.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-04.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-05.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-06.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-07.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-08.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-09.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-10.jpg",
    "https://digital-fry.s3.us-east-1.amazonaws.com/dorothea-website/beverage-01.07.2025/Untitled-1-11.jpg",
  ];

  type Menu = {
    type: string;
    images: string[];
  };

  const menu: Menu[] = [
    {
      type: "breakfast",
      images: breakfastMenuImages,
    },
    {
      type: "food",
      images: foodMenuImages,
    },
    {
      type: "drink",
      images: drinkMenuImages,
    },
  ];

  const [selectedMenuType, setSelectedMenuType] = useState<Menu>(menu[0]);

  const handleMenuTypeChange = (menuType: Menu) => {
    setSelectedMenuType(menuType);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen h-full">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {menu.map((menuType: Menu) => (
              <div key={menuType.type}>
                {selectedMenuType.type === menuType.type ? (
                  <button
                    key={menuType.type}
                    onClick={() => handleMenuTypeChange(menuType)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 
                       bg-secondary-light text-white border-2 border-white
                    `}
                  >
                    {menuType.type === "drink"
                      ? "DRINKS"
                      : menuType.type === "food"
                      ? "FOOD"
                      : "BREAKFAST"}
                  </button>
                ) : (
                  <button
                    key={menuType.type}
                    onClick={() => handleMenuTypeChange(menuType)}
                    className={`px-6 py-2 rounded-full transition-all duration-300  bg-gray-100 hover:bg-gray-200 text-gray-800`}
                  >
                    {menuType.type === "drink"
                      ? "DRINKS"
                      : menuType.type === "food"
                      ? "FOOD"
                      : "BREAKFAST"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-8 justify-center w-full min-h-fit">
        {selectedMenuType.images.map((image: string) => (
          <div className="w-full h-full mx-auto" key={image}>
            <Image
              key={image}
              src={image}
              alt="menu"
              className="w-full h-full mx-auto block md:hidden"
              width={400}
              height={1500}
              objectFit="contain"
            />
            <Image
              key={image}
              src={image}
              alt="menu"
              className="w-full h-full mx-auto hidden md:block"
              width={1000}
              height={1000}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDisplay1;
