import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";

SwiperCore.use([Navigation, Pagination, Keyboard]);

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        tag="section"
        slidesPerView={2}
        freeMode={true}
        spaceBetween={30}
        wrapperTag="ul"
        grabCursor={true}
        pagination={pagination}
        className="mySwiper"
        navigation={true}
        keyboard={true}
      >
        <SwiperSlide tag="li">
          <div className="frame-wrapper">
            <iframe
              title="player"
              src="//www.youtube.com/embed/9szzQ0r_0FY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Kuplinov Play</p>
            <p>Description</p>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <iframe
            title="player"
            src="//www.youtube.com/embed/9szzQ0r_0FY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <iframe
            title="player"
            src="//www.youtube.com/embed/9szzQ0r_0FY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <iframe
            title="player"
            src="//www.youtube.com/embed/9szzQ0r_0FY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <iframe
            title="player"
            src="//www.youtube.com/embed/9szzQ0r_0FY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <iframe
            title="player"
            src="//www.youtube.com/embed/9szzQ0r_0FY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
