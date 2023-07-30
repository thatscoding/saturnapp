import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import target from "../assets/target.png";
import wallet from "../assets/wallet.png";
import blog from "../assets/publication.png";
import consult from "../assets/support.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const serviceCard = [
  {
    title: "track",
    source: target,
    color: "#CDCCF3",
  },
  {
    title: "Wallet",
    source: wallet,
    color: "#F5FCC6",
  },
  {
    title: "blog",
    source: blog,
    color: "#C5EEFD",
  },
  {
    title: "Consult",
    source: consult,
    color: "#FDEDE0",
  },
];

function ServicesCard() {
  return (
    <div className=" mb-2 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {serviceCard.map((item, index) => {
          return (
            <SwiperSlide className="flex items-center py-4 md:py-8 lg:py-12">
              <div
                className="relative shadow-xl rounded-xl w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-60 lg:h-60 border border-gray-100 hover:scale-105 duration-1000 ease-in-out mx-auto"
                style={{ backgroundColor: item.color }}
              >
                <div className="absolute -top-3 md:-top-6 right-3 lg:right-8 lg:-top-8">
                  <img
                    src={item.source}
                    alt=""
                    className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
                  />
                </div>
                <p className="absolute text-[0.7rem] md:text-xl  font-semibold  bottom-2 md:bottom-6 lg:bottom-10 w-full text-center mt-4 uppercase ">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ServicesCard;

// import React from "react";

// function ServicesCard({ title, source, color }) {
//   return (
//     <section
//       className="p-4 shrink-0 rounded-xl shadow-xl flex justify-center items-center flex-col"
//       //   style={{ backgroundColor: color }}
//     >
//       <img src={source} alt="" className="w-36 h-36 object-contain" />
//       <p className="text-center uppercase">{title}</p>
//     </section>
//   );
// }

// export default ServicesCard;
