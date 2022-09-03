import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import HomeCss from '../home.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import MainNike from '../../../assets/mainimage/mainnike.png';
import MainKbp from '../../../assets/mainimage/mainkbp.png';
import MainMuji from '../../../assets/mainimage/mainmuji.png';

export default function MainBanner(){
    return(
        <Swiper
            className={`${HomeCss.swiper} mySwiper`}
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
            <SwiperSlide>
                <img src={MainNike} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MainKbp} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MainMuji} alt='' />
            </SwiperSlide>
        </Swiper>
    )
}