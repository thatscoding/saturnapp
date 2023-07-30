import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const images = [
  {
    source:
      "https://img.freepik.com/premium-vector/aloe-vera-plant-with-fresh-drops-dropper-glass-bottle-collagen-serum-package-mockup-beauty-cosmetics-product-ads-poster-template-realistic-3d-vector-illustration-water-ripple-background_154797-1.jpg?w=996",
    title1: "Groom to Perfection: Aloe Vera",
    title2: "Hair Mask for Men's Hair Care",
    desc: "By Mars by GHC on Jun 22, 2022",
  },

  {
    source:
      "https://img.freepik.com/free-photo/top-view-coffee-accessories-table_23-2148336769.jpg?w=1060&t=st=1690613909~exp=1690614509~hmac=90cb913b22cf16baababbddf3c384e3d69afc25e2747e4ebee5e2bf2d62fe5a0",
    title1: "Coffee for Hair Growth: Brew",
    title2: "Up Longer, Thinker Hair with Coffee",
    desc: "By Mars by GHC on Jun 22, 2022",
  },
  {
    source:
      "https://img.freepik.com/premium-vector/aloe-vera-plant-with-fresh-drops-dropper-glass-bottle-collagen-serum-package-mockup-beauty-cosmetics-product-ads-poster-template-realistic-3d-vector-illustration-water-ripple-background_154797-1.jpg?w=996",
    title1: "Groom to Perfection: Aloe Vera",
    title2: "Hair Mask for Men's Hair Care",
    desc: "By Mars by GHC on Jun 22, 2022",
  },

  {
    source:
      "https://img.freepik.com/free-photo/top-view-coffee-accessories-table_23-2148336769.jpg?w=1060&t=st=1690613909~exp=1690614509~hmac=90cb913b22cf16baababbddf3c384e3d69afc25e2747e4ebee5e2bf2d62fe5a0",
    title1: "Coffee for Hair Growth: Brew",
    title2: "Up Longer, Thinker Hair with Coffee",
    desc: "By Mars by GHC on Jun 22, 2022",
  },
  {
    source:
      "https://img.freepik.com/premium-vector/aloe-vera-plant-with-fresh-drops-dropper-glass-bottle-collagen-serum-package-mockup-beauty-cosmetics-product-ads-poster-template-realistic-3d-vector-illustration-water-ripple-background_154797-1.jpg?w=996",
    title1: "Groom to Perfection: Aloe Vera",
    title2: "Hair Mask for Men's Hair Care",
    desc: "By Mars by GHC on Jun 22, 2022",
  },

  {
    source:
      "https://img.freepik.com/free-photo/top-view-coffee-accessories-table_23-2148336769.jpg?w=1060&t=st=1690613909~exp=1690614509~hmac=90cb913b22cf16baababbddf3c384e3d69afc25e2747e4ebee5e2bf2d62fe5a0",
    title1: "Coffee for Hair Growth: Brew",
    title2: "Up Longer, Thinker Hair with Coffee",
    desc: "By Mars by GHC on Jun 22, 2022",
  },
];

const SliderCard3 = ({ text }) => {
  return (
    <div className=" my-6">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl  font-semibold">
          {text}
        </h3>
        <p className=" w-32 h-10 flex justify-center items-center border-2 border-gray-600 rounded-3xl cursor-pointer">
          View All
        </p>
      </div>
      <Swiper
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px

          700: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },

          814: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide className="flex items-center py-8 px-4">
              <div className=" sm:h-[350px] md:w-[400px] md:h-[300px]  lg:w-[500px] lg:h-[400px] shadow-xl rounded-xl  border border-gray-100 hover:scale-105 duration-1000 ease-in-out ">
                <div className="relative w-full h-full rounded-xl">
                  <img
                    src={item.source}
                    alt=""
                    className="w-full h-full object-fill rounded-xl "
                  />
                  <div className="w-full h-full bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 rounded-xl"></div>
                  <div className="absolute z-1 text-white font-semibold bottom-5 px-4 lg:bottom-14 lg:pl-6">
                    <p className="text-lg md:text-xl lg:text-2xl leading-tight">
                      {item.title1}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      {item.title2}
                    </p>
                    <p className="text-sm lg:text-base mt-2">{item.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderCard3;
