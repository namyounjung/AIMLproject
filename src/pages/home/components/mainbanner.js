import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import HomeCss from "../home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

// brand img
import MujiImg from "../../../assets/image/muji.svg";
import KbpImg from "../../../assets/image/kbp.svg";
import NikeImg from "../../../assets/image/nike.svg";

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
        renderBullet: (index, className) => {
          return <a>ddddd</a>;
        },
      }}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide className={HomeCss.swiperSlide}>
        <NavLink to="/Brands/nike">
          <img src={NikeImg} alt="" />
          <div className={HomeCss.imgTextTop}>
            2022 BLACK Friday
            <br />
            SAVE UP TO 60%
          </div>
          <div className={HomeCss.imgTextBottom}>
            <div className={HomeCss.imgTextBsmall}>Shop Now, Relax later</div>
            <div className={HomeCss.imgTextBBig}>
              NIKE GO LEGGINGS <br />
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
      <SwiperSlide className={HomeCss.swiperSlide}>
        <NavLink to="/Brands/kbp">
          <img src={KbpImg} alt="" />
          <div className={HomeCss.imgTextTop}>
            kittybunnypony <br />
            Life In Patterns
          </div>
          <div className={HomeCss.imgTextBottom}>
            <div className={HomeCss.imgTextBBig}>Merry Christmas with KBP</div>
            <div className={HomeCss.imgTextBsmall}>
              키티버니포니와 함께하는 15번째 크리스마스
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
      <SwiperSlide className={HomeCss.swiperSlide}>
        <NavLink to="/Brands/muji">
          <img src={MujiImg} alt="" />
          <div className={HomeCss.imgTextTop}>
            무인양품과 함께하는 편안한 숙면 <br />
            나에게 맞는 침구 고르기
          </div>
          <div className={HomeCss.imgTextBottom}>
            <div className={HomeCss.imgTextBsmall}>편안한 휴식을 위한</div>
            <div className={HomeCss.imgTextBBig}>
              나만의 홈웨어&파자마 <br />
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
    </Swiper>
  );
}
