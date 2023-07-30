import React from "react";
import ServicesCard from "../components/ServicesCard";
import { serviceCard } from "../data/data";
import { FaWeight, FaBed } from "react-icons/fa";
import { BsFillDropletFill } from "react-icons/bs";

import { AiTwotoneFire } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";

import { FaChevronRight } from "react-icons/fa";
import SliderCard1 from "../components/SliderCard1";
import SliderCard2 from "../components/SliderCard2";
import SliderCard3 from "../components/SliderCard3";

const Home = () => {
  return (
    <main className="container max-w-6xl mx-auto flex flex-col gap-y-6">
      <h3 className="mt-8 md:mt-10 lg:mt-14 text-3xl md:text-4xl lg:text-[2.8rem]">
        <span className="text-gray-500"> Welcome,</span>{" "}
        <span className="font-bold"> June!</span>
      </h3>

      <section className="">
        <ServicesCard />
      </section>

      <section className=" bg-[#F2F1FC] rounded-2xl shadow-xl flex h-[22vh] md:h-[30vh] lg:h-[35vh] ">
        <div className="left flex-1 flex flex-col justify-center items-center gap-y-1 md:gap-y-3">
          <p className="font-bold text-base  md:text-xl lg:text-2xl">
            Wellness Overview:
          </p>
          <div className="flex gap-1 md:gap-3 items-center">
            <span className="text-4xl md:text-6xl font-bold">40</span>
            <span className="bg-white h-6 md:h-10 px-2 md:px-4 rounded-xl text-[0.65rem] md:text-lg text-red-400  flex justify-center items-center">
              Overweight
            </span>
          </div>
          <p className="text-center text-sm md:text-xl">Your current BMI</p>
        </div>
        <div className="right flex-1 flex justify-center items-center flex-col gap-y-2 md:gap-y-4">
          <div className="flex items-center pl-4  gap-2 md:gap-4 bg-white rounded-xl text-center w-36 md:w-44 py-1 ">
            <FaWeight color="orange" className="" size={19} />
            <p className="text-sm md:text-base font-semibold"> 80.5 kgs</p>
          </div>
          <div className="flex items-center pl-4 gap-2 md:gap-4 bg-white rounded-xl text-center w-36 md:w-44 py-1 md:py-2">
            <FaBed color="red" size={19} />
            <p className="text-sm md:text-base font-semibold">7/8 Hours</p>
          </div>
          <div className="w-36 md:w-44 flex items-center pl-4 gap-2 md:gap-4 bg-white rounded-xl text-center  py-1 md:py-2">
            <BsFillDropletFill color="blue" size={19} />
            <p className="text-sm md:text-base font-semibold">4/8 Glasses</p>
          </div>
        </div>
      </section>

      <section className="flex w-full h-[22vh] md:h-[30vh] lg:h-[35vh]  my-2  md:my-4 lg:my-6 gap-1 md:gap-4 lg:gap-6">
        <div className="left flex-1 bg-[#FFF5EF] rounded-xl shadow-xl flex items-start justify-center flex-col gap-y-2 pl-2 md:pl-4  lg:py-4 lg:px-8">
          <p className="font-bold text-base md:text-xl lg:text-2xl ">
            Overall Skin score:
          </p>
          <div className="flex gap-3 items-center h-14 md:h-20">
            <span className="text-4xl md:text-6xl font-bold">45</span>
            <div className="flex flex-col gap-y-1 md:gap-y-2">
              <span className="flex gap-x-2 items-center">
                <AiTwotoneFire color="red" size={18} />
                <p className="text-sm md:text-lg ">5 weeks</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <BsFillImageFill color="orange" size={16} />
                <p className="text-sm md:text-lg">20 uploads</p>
              </span>
            </div>
          </div>

          <div className="flex w-full mt-2 px-1">
            <div className="border-4 border-[#FF4647] w-1/2 rounded-l-xl"></div>
            <div className="border-4 border-[#FFD0D0] w-1/2 rounded-r-xl"></div>
          </div>

          <p className="text-sm md:text-base py-2 px-1">Week: 40/54</p>
        </div>
        <div className="right flex-1 bg-[#FFEFF5] rounded-xl shadow-xl flex items-start pl-4 justify-center px-1 gap-y-1 flex-col lg:px-8">
          <p className="font-bold text-base md:text-xl lg:text-2xl">
            Hair Tracker:
          </p>

          <div className="flex gap-3 items-center h-14 md:h-20">
            <div className="flex flex-col gap-y-1 md:gap-y-2">
              <span className="flex gap-x-2 items-center">
                <AiTwotoneFire color="red" size={18} />
                <p className="text-sm md:text-lg">5 weeks</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <BsFillImageFill color="orange" size={16} />
                <p className="text-sm md:text-lg">20 uploads</p>
              </span>
            </div>
          </div>

          <div className="flex w-full mt-2 px-1">
            <div className="border-4 border-[#FF4647] w-1/2 rounded-l-xl"></div>
            <div className="border-4 border-[#FFD0D0] w-1/2 rounded-r-xl"></div>
          </div>

          <p className="text-sm  md:text-base py-2 px-1">Week: 40/54</p>
        </div>
      </section>

      <section className="bg-[#333333] text-white flex justify-between w-full h-16 lg:h-20 rounded-lg shadow-xl items-center px-4 lg:mb-6">
        <p className="text-lg md:text-xl lg:text-2xl">View all Trackers</p>
        <FaChevronRight size={25} />
      </section>

      <section>
        <SliderCard1 />
      </section>

      <section>
        <SliderCard2 text="Bestsellers" />
      </section>

      <section>
        <SliderCard2 text="Hair Care" />
      </section>

      <section>
        <SliderCard3 text="Understanding Hair" />
      </section>

      <section>
        <SliderCard2 text="Skin Care" />
      </section>

      <section>
        <SliderCard3 text="Skin - Talk" />
      </section>
    </main>
  );
};

export default Home;
