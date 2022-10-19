import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import './MainImg.scss';
SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가
export default function MainImg() {
  useEffect(() => {

  }, [])
  return (
    <div className="top-bg">
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // touchRatio={0} // 드래그 이동 불가
        loop={true}
      >
        {/* <img className="logo" src="/images/dr-robbin-slider-logo.png" alt="" /> */}

        <SwiperSlide className="swiper-slide">
          <img className="bg" src="/images/main1.jpg" alt="" />

          <div className="container">
            <img className="logo" src="/images/dr-robbin-slider-logo.png" alt="" />

            <div className="title">
              <h4>HONEST</h4>
            </div>
            <div className="content">
              <p>고객의 건강을 최선으로 몸에 이로운 재료만 사용합니다.</p>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img className="bg" src="/images/main2.jpg" alt="" />
          <div className="container">
            <img className="logo" src="/images/dr-robbin-slider-logo.png" alt="" />

            <div className="title">
              <h4>SINCERELY</h4>
            </div>
            <div className="content">
              <p>닥터로빈의 모든 직원은 원재료 섭외부터 조리까지 정성을 다합니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg" src="/images/main3.jpg" alt="" />
          <div className="container">
            <img className="logo" src="/images/dr-robbin-slider-logo.png" alt="" />
            <div className="title">
              <h4>MODESTY</h4>
            </div>
            <div className="content">
              <p>고객의 의견에 귀기울이며 음식으로 행복을 전달하겠습니다.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}