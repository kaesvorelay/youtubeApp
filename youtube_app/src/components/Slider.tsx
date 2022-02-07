import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Navigation, Pagination } from "swiper";
import { useAppSelector } from "../hooks/reduxHooks";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/style.css";
import styled from "styled-components";

const StyledTitleSlider = styled.h1`
  text-align: center;
  color: rgb(250, 237, 198);
  margin-top: 50px;
  font-size: 36px;
`;

SwiperCore.use([Navigation, Pagination, Keyboard]);

const Slider = () => {
  const state = useAppSelector((state) => state.channelSlice);
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  if (state.data.length > 0 && state.loading === true) {
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
          {state.data.map((item) => (
            <SwiperSlide tag="li">
              <div className="frame-wrapper">
                <iframe
                  title="player"
                  src={`https://www.youtube.com/embed/${item.idVideo}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="channel-title">{item.channelTitle}</p>
                <p className="channel-discription">{item.descr}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  } else if (state.loading === false && state.error.length > 0) {
    return <StyledTitleSlider>Error: {state.error}</StyledTitleSlider>;
  } else {
    return <StyledTitleSlider>Waiting...</StyledTitleSlider>;
  }
};

export default Slider;
