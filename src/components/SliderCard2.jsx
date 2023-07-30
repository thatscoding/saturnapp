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
      "https://images.mamaearth.in/catalog/product/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/t/e/tea-tree-foaming-face-wash-with-ingredients_85zdnmuke0xpfych.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/t/e/tea-tree-foaming-face-wash-with-ingredients_85zdnmuke0xpfych.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/o/n/onion-hair-conditioner-250ml-with-ingredient_2.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
  {
    source:
      "https://images.mamaearth.in/catalog/product/t/e/tea-tree-foaming-face-wash-with-ingredients_85zdnmuke0xpfych.jpg?fit=contain&width=768",
    title:
      "Tea Tree Foaming Face Wash with Tea Tree and Salicylic Acid for Acne and Pimples - 150ml",
    price: 999,
  },
];

const SliderCard2 = ({ text }) => {
  return (
    <div className=" my-6">
      <div className="flex justify-between px-4 items-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {text}
        </h3>
        <p className=" w-32 h-10 flex justify-center items-center border-2 border-gray-600 rounded-3xl cursor-pointer">
          View All
        </p>
      </div>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}

        breakpoints={{
          // when window width is >= 320px

          400: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },

          // when window width is >= 480px

          480: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          550: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          650: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },

          900: {
            slidesPerView: 2.7,
            spaceBetween: 10,
          },

          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide className="flex items-center py-8 px-2">
              <div className=" shadow-xl rounded-xl w-[260px] h-[380px] border border-gray-100 hover:scale-105 duration-1000 ease-in-out">
                <div className="relative">
                  <img
                    src={item.source}
                    alt=""
                    className="object-contain w-full"
                  />
                  <span className="absolute top-6 left-4">
                    <BiSolidOffer size={25} color="green" />
                  </span>
                  <span className="flex absolute right-4 top-6 cursor-pointer">
                    {index % 2 == 0 ? (
                      <AiOutlineHeart size={25} />
                    ) : (
                      <AiFillHeart color="red" size={25} />
                    )}
                  </span>
                </div>
                <div className="p-4">
                  <p className="line-clamp-1 text-sm">{item.title}</p>
                  <div className="flex gap-1 items-center my-1">
                    <span className="flex gap-1">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>{" "}
                    <span>(4.7)</span>
                  </div>
                  <p>
                    <span> Rs.999</span>{" "}
                    <small className="line-through">Rs.1499 </small>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderCard2;
