import home from "../assets/home.png";
import reg from "../assets/reg-home.png";
import { Link } from "react-router-dom";
import open from "../assets/open-day.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { sliderContent } from "../services/Details";

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
      <div className="mx-24 my-10 md:my-24 lg:my-32">
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
      <div className="mx-24 my-20">
        <h1 className="text-4xl lg:text-5xl mb-6 text-center font-medium lg:font-semibold">
          Next Event
        </h1>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-40 justify-evenly items-center">
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
            <p className="text-gray-600">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 my-20">
        <h1 className="text-4xl lg:text-5xl mb-6 text-center font-medium lg:font-semibold">
          Our Last Event
        </h1>
        <p className="text-center px-44 text-gray-800 text-xl mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          iste? Molestias iste recusandae dolorem aperiam omnis aspernatur earum
          atque facere, enim, accusamus ipsum labore saepe, rem fugit incidunt
          molestiae distinctio.
        </p>
        <div className="flex justify-center items-center">
          <div className="max-w-80 sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
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
    </>
  );
}
