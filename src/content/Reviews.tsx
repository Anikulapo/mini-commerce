"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "@/components/TestimonialCard";

interface Testimony {
  name: string;
  text: string;
}

const testimonials: Testimony[] = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Mini Commerce. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Mini Commerce. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Mini Commerce. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emma R.",
    text: "Mini Commerce has completely transformed my wardrobe! The quality is exceptional and the customer service is top-notch. I've recommended it to all my friends.",
  },
  {
    name: "Michael T.",
    text: "The attention to detail in every garment is impressive. From the fabric quality to the stitching, everything feels premium. Shopping here has been a game-changer for my style.",
  },
  {
    name: "Lisa P.",
    text: "I love how Mini Commerce offers trendy pieces at reasonable prices. The delivery is always prompt and the packaging is beautiful. It's become my go-to for all fashion needs.",
  },
];

const Reviews = () => {
  return (
    <div className="bg-white py-[10%] relative w-full text-black">
       <div>
        <h2 className="px-[5%] text-black text-left font-bold text-2xl md:text-5xl pb-10">
            OUR HAPPY CUSTOMERS
        </h2>
        </div> 
      <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={6000}
            slidesPerView={1} // 3 full, one partially visible
            spaceBetween={20}
            freeMode={true}
            loop={true}
            grabCursor={true}
            className="w-full flex justify-center items-center"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="transition-all duration-300 custom-slide">
                <TestimonialCard testimony={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      <div className="hidden md:block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={6000}
            slidesPerView={2} // 3 full, one partially visible
            spaceBetween={20}
            freeMode={true}
            loop={true}
            grabCursor={true}
            className="w-full px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="transition-all duration-300 custom-slide">
                <TestimonialCard testimony={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
      <div className="hidden lg:block">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={6000}
            slidesPerView={3.3} // 3 full, one partially visible
            spaceBetween={20}
            freeMode={true}
            loop={true}
            grabCursor={true}
            className="w-full px-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="transition-all duration-300 custom-slide">
                <TestimonialCard testimony={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
