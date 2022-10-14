import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가
export default function MainImg() {
  return (
    <div className="top-img">
      <Swiper
        className="swiper"
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide className="swiper-slide">
          <img src="images/main1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/main2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/main3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}