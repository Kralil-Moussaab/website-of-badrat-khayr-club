import home from "../assets/home.png";
import reg from "../assets/reg-home.png";
import { Link } from "react-router-dom";
import open from "../assets/open-day.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { sliderContent, CategoiesEvents } from "../services/Details";

export default function Home() {
  return (
    <>
      <div className="relative">
        <img src={home} className="w-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2">
          <h1 className="uppercase text-center text-white font-semibold mb-1 sm:text-6xl md:text-7xl lg:mb-6 text-xl lg:text-8xl">
            badrat khayr club
          </h1>
          <h3 className="text-center text-white sm:text-5xl md:text-6xl font-semibold text-md lg:text-6xl">
            A journey of thousand milles begins with a single step
          </h3>
        </div>
      </div>
      <div className="mx-10 lg:mx-24 my-10 md:my-24 lg:my-32">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-60 justify-evenly items-center">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl pb-5">
              Do u want to be a member of the club?
            </h1>
            <Link
              to="inscription"
              className="bg-green-bk text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#148563] transition"
            >
              Register Now
            </Link>
          </div>
          <div className="relative w-64 sm:w-96 lg:w-full mt-5 sm:mt-2">
            <div className="absolute w-full h-full rounded-tr-lg border rounded-bl-lg border-1 border-dark-one7  right-4 top-4 z-0"></div>
            <img
              src={reg}
              className="w-full rounded-tr-lg rounded-bl-lg z-10 relative"
              alt="reg"
            />
          </div>
        </div>
      </div>
      <div className="mx-10 lg:mx-24 my-20">
        <h1 className="text-4xl lg:text-5xl mb-6 text-center font-medium lg:font-semibold">
          Next Event
        </h1>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-40 justify-evenly items-center">
          <div className="relative w-64 sm:w-96 lg:w-[34rem] mt-5 sm:mt-2">
            <div className="absolute w-full h-full rounded-tl-lg rounded-br-lg border border-1 border-dark-one7  left-4 top-4 z-0"></div>
            <img
              src={open}
              className="w-full rounded-tl-lg rounded-br-lg z-10 relative"
              alt="reg"
            />
          </div>
          <div className="text-center mt-5 md:mt-0 md:w-1/2 md:text-start">
            <h1 className="text-2xl sm:text-4xl text-green-bk lg:text-6xl pb-5">
              Welcome Day 17 October
            </h1>
            <p className="text-gray-600 pb-1">
              Badrat Khayr Club is honored to invite you to attend its fifth
              foundation anniversary celebration since october 17th,2019.
            </p>
            <p className="text-gray-600 pb-1">
              We&apos;re excited to bring you a one-of-a-kind event, filled with
              engaging activities that we can’t wait to share with you.{" "}
            </p>
            <p className="text-gray-600 pb-1">
              We&apos;re excited to bring you a one-of-a-kind event, filled with
              engaging activities that we can’t wait to share with you.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 lg:mx-24 my-20">
        <h1 className="text-4xl lg:text-5xl mb-6 text-center font-medium lg:font-semibold">
          Our Last Event
        </h1>
        <p className="text-center lg:px-44 text-gray-800 text-xl mb-2">
          Badrat Khayr Club organised a free, comprehensive revision for 2024
          Baccalaureate students in the following fields:
        </p>
        <p className="text-center flex flex-col justify-center items-center lg:px-44 text-gray-800 text-xl mb-2">
          <span>✓ Experimental Sciences</span>
          <span>✓ Mathematics</span>
          <span>✓ Technical Sciences</span>
          <span>✓ Management and Economics</span>
          <span>✓ Foreign Languages</span>
          <span>✓ Literature and Philosophy</span>
        </p>
        <p className="text-center lg:px-44 text-gray-800 text-xl mb-5">
          Led by a group of outstanding subject teachers, the revision session
          ran for a full week from 26th to 30th May at the Faculty of Economic,
          Commercial, and Management Sciences.
        </p>
        <h3 className="text-2xl lg:text-3xl text-green-bk mb-6 text-center font-medium lg:font-semibold">
          Some pictures from BAC 2024
        </h3>
        <div className="flex justify-center items-center">
          <div className="max-w-[17rem] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {sliderContent.map((bac) => (
                <SwiperSlide key={bac}>
                  <img src={bac} className="rounded-xl" alt="bac" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="mx-10 lg:mx-24 my-20">
        <h1 className="text-4xl lg:text-5xl mb-6 text-center font-medium lg:font-semibold">
          Our Categoies of Events
        </h1>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {CategoiesEvents.map((category, index) => (
            <div
              key={index}
              className="flex group bg-white rounded-lg hover:bg-green-bk cursor-pointer transition-all duration-200 gap-4 flex-col py-4 px-6"
            >
              {category.icon}
              <p className="group-hover:text-white text-2xl font-semibold">
                {category.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
