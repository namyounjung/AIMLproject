import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import HomeCss from "../home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import MainNike from "../../../assets/mainimage/mainnike.png";
import MainKbp from "../../../assets/mainimage/mainkbp.png";
import MainMuji from "../../../assets/mainimage/mainmuji.png";
import { NavLink, useLocation } from "react-router-dom";

export default function MainBanner() {
  return (
    <Swiper
      className={`${HomeCss.mainBanner} mySwiper`}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "fraction",
      }}
      module={[Autoplay, Pagination]}
    >
      <SwiperSlide className={HomeCss.swiperSlide}>
        <NavLink to="/Brands/nike">
          <img
            src={MainNike}
            alt=""
          />
        </NavLink>
      </SwiperSlide>
      <SwiperSlide className={HomeCss.swiperSlide}>
        <NavLink to="/Brands/kbp">
          <img
            src={MainKbp}
            alt=""
          />
        </NavLink>
      </SwiperSlide>
      <SwiperSlide className={HomeCss.swiperSlide}>
        <NavLink to="/Brands/muji">
          <img
            src={MainMuji}
            alt=""
          />
        </NavLink>
      </SwiperSlide>
    </Swiper>
  );
}
