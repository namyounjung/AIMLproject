import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import HomeCss from '../home.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Sale1 from '../../../assets/mainimage/sale1.png';
import Sale2 from '../../../assets/mainimage/sale2.png';
import Sale3 from '../../../assets/mainimage/sale3.png';

export default function PopularBanner(){
    return(
            <div className={HomeCss.container}>
                <p className={HomeCss.title}>인기 세일 브랜드</p>
                <div className={HomeCss.imgWrapper}>
                </div>
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
        >
            <div className={HomeCss.BottomImg}>
            <SwiperSlide>
                <img src={Sale1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Sale2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Sale3} alt='' />
            </SwiperSlide>
            </div>
        </Swiper>
            </div>
            
    )
}