"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Item } from "@/model/Item";

const MenuDisplay = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [allCategories, setAllCategories] = useState<string[][]>([[]]);
  const [typeCategories, settypeCategories] = useState<string[]>([""]);
  const [types, setTypes] = useState<string[]>([""]);
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("/api/admin/menu/fetch-items");
      const items = await res.json();
      setItems(items);
      setAllItems(items);
      const newTypes = new Set<string>();
      items.forEach((item: Item) => {
        newTypes.add(item.type);
      });
      setTypes(Array.from(newTypes).reverse());
      setSelectedType(Array.from(newTypes)[0]);

      const foodCategories = new Set<string>();
      const drinkCategories = new Set<string>();
      const breakfastCategories = new Set<string>();
      items.forEach((item: Item) => {
        if (item.type === "food") {
          if (foodCategories.has(item.category)) {
          } else {
            foodCategories.add(item.category);
          }
        } else if (item.type === "drink") {
          if (drinkCategories.has(item.category)) {
          } else {
            drinkCategories.add(item.category);
          }
        } else if (item.type === "breakfast") {
          if (breakfastCategories.has(item.category)) {
          } else {
            breakfastCategories.add(item.category);
          }
        }
      });

      setAllCategories([
        Array.from(foodCategories),
        Array.from(drinkCategories),
        Array.from(breakfastCategories),
      ]);
      console.log("allCategories", allCategories);
      setSelectedCategory(Array.from(foodCategories)[0]);
      settypeCategories(Array.from(foodCategories));
    };
    fetchItems();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    allCategories[0][0]
  );
  const [selectedType, setSelectedType] = useState<string>(types[0]);
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setItems(items.filter((item) => item.category.includes(category)));
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    if (type === "food") {
      settypeCategories(allCategories[0]);
      setSelectedCategory(allCategories[0][0]);
    } else if (type === "drink") {
      settypeCategories(allCategories[1]);
      setSelectedCategory(allCategories[1][0]);
    } else {
      settypeCategories(allCategories[2]);
      setSelectedCategory(allCategories[2][0]);
    }
    const filteredItems = allItems.filter((item) => item.type === type);

    setItems(filteredItems);
  };

  const filteredItems = allItems.filter((item) =>
    item.category.includes(selectedCategory)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {types.map(
          (type: string) => (
            console.log(type),
            (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedType === type
                    ? "bg-secondary-light text-white border-2 border-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {type === "drink"
                  ? "DRINKS"
                  : type === "food"
                  ? "FOOD"
                  : "BREAKFAST"}
              </button>
            )
          )
        )}
      </div>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {typeCategories.map((category: string) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? "bg-secondary-light text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-2 relative">
                <h3 className="text-xl font-semibold text-gray-800  flex items-center gap-2">
                  {item.name}
                  <div className="flex items-center gap-2 ">
                    {item.isVeg ? (
                      <div className="flex items-center gap-2 border-2 border-green-500  p-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 border-2 border-red-500  p-1">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      </div>
                    )}
                  </div>
                </h3>
                <span className="text-secondary-light font-bold">
                  ₹{item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-gray-600 text-sm ">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenuDisplay;
