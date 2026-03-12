"use client";
import { motion } from "framer-motion";
export const images = [
  "https://i.ibb.co/qmGBTmC/01.jpg",
  "https://i.ibb.co/db3Fp1H/02.jpg",
  "https://i.ibb.co/mTSL16n/03.jpg",
  "https://i.ibb.co/5LdWdjq/04.jpg",
  "https://i.ibb.co/VSnC7DQ/05.jpg",
  "https://i.ibb.co/HKN4dBr/06.jpg",
  "https://i.ibb.co/tcKbrVr/07.jpg",
  "https://i.ibb.co/k57mZmv/08.jpg",
  "https://i.ibb.co/4ggWspp/09.jpg",
  "https://i.ibb.co/M90Lrbq/10.jpg",
  "https://i.ibb.co/rMrqhLm/11.jpg",
  "https://i.ibb.co/nsn0W3L/12.jpg",
  "https://i.ibb.co/kh1tyb8/13.jpg",
  "https://i.ibb.co/3RN8wZ4/14.jpg",
  "https://i.ibb.co/2vPBZ4K/15.jpg",
  "https://i.ibb.co/LJvcygZ/16.jpg",
  "https://i.ibb.co/n7YZJsj/17.jpg",
  "https://i.ibb.co/yPFNX0G/18.jpg",
  "https://i.ibb.co/hFVpfQv/19.jpg",
  "https://i.ibb.co/XJ2v7fJ/20.jpg",
  "https://i.ibb.co/fNqmyv1/21.jpg",
  "https://i.ibb.co/RNp1PKV/22.jpg",
  "https://i.ibb.co/4JxNRVV/23.jpg",
  "https://i.ibb.co/JnQmvch/24.jpg",
  "https://i.ibb.co/ctNRCFM/25.jpg",
  "https://i.ibb.co/mHtw9R7/26.jpg",
  "https://i.ibb.co/JjQmMfW/27.jpg",
  "https://i.ibb.co/LC212wQ/28.jpg",
  "https://i.ibb.co/rcnTZ5Q/29.jpg",
  "https://i.ibb.co/tX7vT7m/30.jpg",
  "https://i.ibb.co/rp6JMk9/31.jpg",
  "https://i.ibb.co/KXRbZg1/32.jpg",
  "https://i.ibb.co/wSsHtrs/33.jpg",
  "https://i.ibb.co/TBpTKk8/34.jpg",
  "https://i.ibb.co/vs7SXh5/35.jpg",
  "https://i.ibb.co/Cvmrs95/36.jpg",
  "https://i.ibb.co/jrKrB9n/37.jpg",
  "https://i.ibb.co/LSch5Q1/38.jpg",
  "https://i.ibb.co/zVF7QCS/39.jpg",
  "https://i.ibb.co/PYbq8NG/40.jpg",
  "https://i.ibb.co/2jYv0yX/41.jpg",
];

const GalleryImages = () => {
  return (
    <div className=" bg-gradient-dark">
      <div className="p-4 overflow-x-hidden relative">
        {/* <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent flex flex-col justify-center items-center " /> */}

        <div className="flex items-center -translate-x-16 ">
          <TestimonialList list={testimonials.top} duration={300} />
          <TestimonialList list={testimonials.top} duration={300} />
          <TestimonialList list={testimonials.top} duration={300} />
        </div>
        <div className="flex items-center ">
          <TestimonialList list={testimonials.middle} duration={300} reverse />
          <TestimonialList list={testimonials.middle} duration={300} reverse />
          <TestimonialList list={testimonials.middle} duration={300} reverse />
        </div>
        {/* <div className="flex items-center ">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
        <div className="flex items-center">
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
        </div> */}

        {/* <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" /> */}
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 px-4 py-4 "
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[175px] h-[175px] xl:w-[300px] xl:h-[300px] grid  overflow-hidden relative"
          >
            <img
              src={t.img}
              className=" object-cover object-center w-[175px] h-[175px] xl:w-[300px] xl:h-[300px] "
              alt="image"
            />
            {/* <div className="bg-slate-900 text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-slate-300">{t.info}</span>
            </div> */}
            <span className="text-7xl absolute top-2 right-2 text-slate-700"></span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://i.ibb.co/4ggWspp/09.jpg",
      name: "Jen S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 2,
      img: "https://i.ibb.co/db3Fp1H/02.jpg",
      name: "Paul A,",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/nsn0W3L/12.jpg",
      name: "Cindy J.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/RNp1PKV/22.jpg",
      name: "Danica W.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
    },
    {
      id: 5,
      img: "https://i.ibb.co/5LdWdjq/04.jpg",
      name: "Peter H.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
    },
    {
      id: 6,
      img: "https://i.ibb.co/4JxNRVV/23.jpg",
      name: "Lanny B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://i.ibb.co/VSnC7DQ/05.jpg",
      name: "Alex F.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/ctNRCFM/25.jpg",
      name: "Claude O.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/HKN4dBr/06.jpg",
      name: "Max Q.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/mHtw9R7/26.jpg",
      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://i.ibb.co/tcKbrVr/07.jpg",
      name: "Kevin K.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 6,
      img: "https://i.ibb.co/JjQmMfW/27.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://i.ibb.co/k57mZmv/08.jpg",
      name: "Danny G.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
    },
    {
      id: 2,
      img: "https://i.ibb.co/LC212wQ/28.jpg",
      name: "Ian D.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/4ggWspp/09.jpg",
      name: "Ben S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/rcnTZ5Q/29.jpg",
      name: "Matthew I.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://i.ibb.co/M90Lrbq/10.jpg",
      name: "Garrett P.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
    },
    {
      id: 6,
      img: "https://i.ibb.co/tX7vT7m/30.jpg",
      name: "Xavier C.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
    },
  ],
};

export default GalleryImages;
