import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const images = [
  {
    source:
      "https://img.freepik.com/free-vector/pomegranate-cosmetic-bottles-beauty-banner_33099-2264.jpg?w=1380&t=st=1690600130~exp=1690600730~hmac=3c677b2832034b50fffb1b5e2600e232f8acc337b11955f74bbe3a8f5ddbecda",
  },
  {
    source:
      "https://img.freepik.com/free-vector/pomegranate-cosmetic-bottles-beauty-banner_33099-2264.jpg?w=1380&t=st=1690600130~exp=1690600730~hmac=3c677b2832034b50fffb1b5e2600e232f8acc337b11955f74bbe3a8f5ddbecda",
  },
  {
    source:
      "https://img.freepik.com/free-vector/pomegranate-cosmetic-bottles-beauty-banner_33099-2264.jpg?w=1380&t=st=1690600130~exp=1690600730~hmac=3c677b2832034b50fffb1b5e2600e232f8acc337b11955f74bbe3a8f5ddbecda",
  },
];

const SliderCard1 = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide className="rounded-xl shadow-xl">
              <img
                src={item.source}
                alt=""
                className="w-full h-full object-contain rounded-xl shadow-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderCard1;
