import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BubleChat from "./BubleChat";
import PrevButton from "../../assets/PrevButton";
import NextButton from "../../assets/NextButton";

const testimonials = [
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations at Acme Inc",
    quote:
      "Positivus transformed our digital marketing strategy. Their expertise in SEO and PPC has driven remarkable growth for our business. The team is easy to work with and consistently delivers results.",
  },
  {
    name: "Michael Brown",
    role: "CEO at TechStart",
    quote:
      "The creative content and social media campaigns produced by Positivus have significantly boosted our brand engagement. We are extremely pleased with the partnership and the outcomes achieved.",
  },
  {
    name: "Emily White",
    role: "CMO at Global Retail",
    quote:
      "Exceptional service and data-driven approach! Positivus helped us optimize our ad spend and maximize ROI. Their detailed reporting keeps us informed every step of the way.",
  },
  {
    name: "Chris Green",
    role: "Founder at EcoSolutions",
    quote:
      "Working with Positivus has been a game-changer. They built us a stunning website and implemented a solid SEO plan that ranked us on the first page of Google within months.",
  },
];

const Caraousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div className="w-full bg-dark rounded-[45px] p-8 md:p-14 text-white overflow-hidden ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          576: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 1.2, centeredSlides: true },
          1024: { slidesPerView: 1.5, centeredSlides: true },
        }}
        className="pb-24 h-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="h-auto! flex flex-col">
            <BubleChat item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center  mt-18  mx-auto">
        <button className="custom-prev text-white hover:text-primary transition-colors cursor-pointer disabled:opacity-50">
          <PrevButton />
        </button>

        <div className="flex gap-2 mx-12 md:mx-24">
          {testimonials.map((_, index) => (
            <span className="cursor-pointer" key={index}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                  fill={activeIndex === index ? "#B9FF66" : "white"}
                />
              </svg>
            </span>
          ))}
        </div>

        <button className="custom-next text-white hover:text-primary transition-colors cursor-pointer disabled:opacity-50">
          <NextButton />
        </button>
      </div>

      <style>{`
        .swiper-pagination-bullet-active svg path {
            fill: #B9FF66;
        }
      `}</style>
    </div>
  );
};

export default Caraousel;
