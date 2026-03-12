"use client";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useMeasure from "react-use-measure";
import { HiOutlineArrowNarrowLeft as LeftArrow } from "react-icons/hi";
import { HiOutlineArrowNarrowRight as RightArrow } from "react-icons/hi";
import { images } from "@/assets/imageSrcLinks";
const CARD_WIDTH = 480;
const MARGIN = 149;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const ImageCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = useCallback(() => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => pv - CARD_SIZE); // Simplified state update logic
  }, [CAN_SHIFT_RIGHT]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      shiftRight();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [shiftRight]);

  return (
    <section className="bg-primary-default py-8 pb-32" ref={ref}>
      <div className="relative overflow-hidden py-24">
        <div className="hidden xl:block absolute top-0 left-0 h-[80%] xl:h-[700px]  lg:w-[34%]  z-20 bg-primary-default/50"></div>
        <div className="hidden xl:block absolute top-0 right-0 h-[80%] xl:h-[700px]  lg:w-[32%]  z-20 bg-primary-default/50"></div>
        <div className="mx-auto max-w-6xl xl:overflow-hidden">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
          <div className="flex items-center justify-end xl:pr-72 xl:pt-16 py-8 absolute z-20 xl:-my-16 bottom-0 right-0  ">
            <div className="flex justify-end items-center gap-2">
              <button
                title="button"
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
                className={`transition-all ease-in-out text-secondary-default hover:-translate-x-4 hover:text-secondary-dark duration-300  hover:bg-white rounded-full  p-6 -mb-4 xl:mb-12     flex justify-center items-center ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
              >
                <LeftArrow className="w-8 h-6" />
              </button>

              <button
                title="button"
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
                className={` transition-all ease-in-out text-secondary-default hover:translate-x-4 hover:text-secondary-dark duration-300  hover:bg-white rounded-full p-6 -mb-4 xl:mb-12    flex justify-center items-center ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
              >
                <RightArrow className="w-8 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title }: PostType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 translate-x-[75%]"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <motion.img
        src={imgUrl}
        className="mb-3 h-[400px] w-[500px] xl:h-[600px]  rounded-lg object-cover object-center hover:scale-105 "
        alt={`An image for a fake blog post titled ${title}`}
      />
      <p className="xl:pt-4 font-junge text-secondary-dark text-xl md:text-5xl w-full text-center rounded-lg  font-semibold">
        {author}
      </p>
    </div>
  );
};

export default ImageCarousel;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: images[22],
    author: "Khow Suey Bowl",
    title: "We built an AI chess bot with ChatGPT",
    description: "it's an image",
  },
  {
    id: 2,
    imgUrl: images[23],
    author: "Pomo Roso",
    title: "How to grow your personal brand as a web designer",
    description: "it's an image",
  },
  {
    id: 3,
    imgUrl: images[24],
    author: "Cottage Cheese steak",
    title: "Calm down, monoliths are totally fine",
    description: "it's an image",
  },
  // {
  //   id: 4,
  //   imgUrl: images[25],
  //   author: "Jess Drum",
  //   title: "A quick guide to Framer Motion (for dummies)",
  //   description:
  //     "it's an image",
  // },
  {
    id: 5,
    imgUrl: images[26],
    author: "Buratta pizza",
    title: "You probably don't need kubernetes",
    description: "it's an image",
  },

  {
    id: 7,
    imgUrl: images[28],
    author: "Lebanese Platter",
    title: "...",
    description: "it's an image",
  },

  {
    id: 9,
    imgUrl: images[30],
    author: "Veg Dimsums",
    title: "How to grow your personal brand as a web designer",
    description: "it's an image",
  },
  {
    id: 10,
    imgUrl: images[31],
    author: "Golden Cold Brew",
    title: "Calm down, monoliths are totally fine",
    description: "it's an image",
  },

  {
    id: 12,
    imgUrl: images[33],
    author: "Jamun Mojito",
    title: "You probably don't need kubernetes",
    description: "it's an image",
  },

  {
    id: 27,
    imgUrl: images[30],
    author: "Veg Dimsums",
    title: "We built an AI chess bot with ChatGPT",
    description: "it's an image",
  },
  {
    id: 28,
    imgUrl: images[21],
    author: "Spaghetti",
    title: "How to grow your personal brand as a web designer",
    description: "it's an image",
  },

  {
    id: 30,
    imgUrl: images[33],
    author: "Jamun Mojito",
    title: "A quick guide to Framer Motion (for dummies)",
    description: "it's an image",
  },

  {
    id: 32,
    imgUrl: images[35],
    author: "Quinoa Steak",
    title: "State of JavaScript in 2024",
    description: "it's an image",
  },

  // {
  //   id: 34,
  //   imgUrl: images[37],
  //   author: "Cottage Cheese steak",
  //   title: "We built an AI chess bot with ChatGPT",
  //   description:
  //     "it's an image",
  // },
  // ------------
  // {
  //   id: 35,
  //   imgUrl: images[38],
  //   author: "Kyle Parsons",
  //   title: "How to grow your personal brand as a web designer",
  //   description:
  //     "it's an image",
  // },

  // {
  //   id: 37,
  //   imgUrl: images[40],
  //   author: "Jess Drum",
  //   title: "A quick guide to Framer Motion (for dummies)",
  //   description:
  //     "it's an image",
  // },
  {
    id: 38,
    imgUrl: images[21],
    author: "Spaghetti",
    title: "You probably don't need kubernetes",
    description: "it's an image",
  },

  {
    id: 41,
    imgUrl: images[41],
    author: "Fruit Cream Cheese Crossiant",
    title: "...",
    description: "it's an image",
  },
  {
    id: 42,
    imgUrl: images[42],
    author: "Kunafa Cheese Cake",
    title: "...",
    description: "it's an image",
  },
  {
    id: 43,
    imgUrl: images[43],
    author: "Virgin Sangria",
    title: "...",
    description: "it's an image",
  },
  {
    id: 44,
    imgUrl: images[44],
    author: "Strawberry Kiwi Slush",
    title: "...",
    description: "it's an image",
  },
  {
    id: 45,
    imgUrl: images[45],
    author: "Lotus Biscoff Pancake",
    title: "...",
    description: "it's an image",
  },
  {
    id: 46,
    imgUrl: images[46],
    author: "Dorothea Coffee",
    title: "...",
    description: "it's an image",
  },
  {
    id: 47,
    imgUrl: images[47],
    author: "Sizzling Burger",
    title: "...",
    description: "it's an image",
  },
];
