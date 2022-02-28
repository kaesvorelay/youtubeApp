import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Navigation,
  Pagination,
  Swiper as SwiperType,
} from "swiper";
import { useAppSelector } from "../../hooks/reduxHooks";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../style/style.css";
import { StyledTitleSlider } from "./StyledSlider";

SwiperCore.use([Navigation, Pagination, Keyboard]);

const Slider = () => {
  const [slide, setSlide] = useState<SwiperType>();
  const state = useAppSelector((state) => state.channelSlice);
  useEffect(() => {
    if (slide) {
      slide.slideTo(0);
    }
  }, [state.data]);

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
          initialSlide={0}
          onSwiper={(swiper) => setSlide(swiper)}
        >
          {state.data.map((item, index: number) => (
            <SwiperSlide tag="li">
              <div id={index.toString()} className="frame-wrapper">
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
