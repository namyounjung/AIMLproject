import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import HomeCss from "../home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import Sale1 from "../../../assets/mainimage/sale1.png";
import Sale2 from "../../../assets/mainimage/sale2.png";
import Sale3 from "../../../assets/mainimage/sale3.png";

export default function PopularBanner() {
  return (
    <div className={HomeCss.container}>
      <p className={HomeCss.title}>인기 세일 브랜드</p>
      {/* <div className={HomeCss.imgWrapper}></div> */}
      <Swiper
        className={`${HomeCss.swiper2} mySwiper`}
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
        spaceBetween={8}
        slidesPerView={1.2}
      >
        <SwiperSlide className={HomeCss.swiperSlide}>
          <img
            src={Sale1}
            alt=""
          />
          <div className={HomeCss.swiperTextWrapper}>
            <p className={HomeCss.swiperTextTitle}>
              아디다스 블랙프라이데이 기획전
            </p>
            <p className={HomeCss.swiperTextSubTitle}>전품목 ~70%</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={HomeCss.swiperSlide}>
          <img
            src={Sale2}
            alt=""
          />
          <div className={HomeCss.swiperTextWrapper}>
            <p className={HomeCss.swiperTextTitle}>젝시믹스 단독 특가</p>
            <p className={HomeCss.swiperTextSubTitle}>
              2022 올해의 브랜드 대상 수상 기념 초특가 할인
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={HomeCss.swiperSlide}>
          <img
            src={Sale3}
            alt=""
          />
          <div className={HomeCss.swiperTextWrapper}>
            <p className={HomeCss.swiperTextTitle}>나이키 에너지위크</p>
            <p className={HomeCss.swiperTextSubTitle}>
              찰나의 움직임이 최고의 경지로,
            </p>
            <p className={HomeCss.swiperTextSubTitle}>
              나이키 초특가 할인을 만나보세요
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
