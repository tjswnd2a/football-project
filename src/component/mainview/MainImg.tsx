import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import "./MainImg.scss";
SwiperCore.use([Navigation, Pagination, Autoplay]); // 추가
export default function MainImg() {
  useEffect(() => {}, []);
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
          <img
            className="bg"
            src="/images/football-scene-at-the-stadium-with-close-up-of-a-soccer-shoe-kicking-the-ball_207634-5556.jpg"
            alt=""
          />

          <div className="container">
            <div className="title">
              <h4>QUALITY</h4>
            </div>
            <div className="content">
              <p>100% 정품만 판매하며 보다 좋은 상품으로 만나볼수 있습니다.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg"
            src="/images/football-g1e8dc9cda_1920.jpg"
            alt=""
          />
          <div className="container">
            <div className="title">
              <h4>TRUST</h4>
            </div>
            <div className="content">
              <p>
                빠른배송과 정직한 가격으로 만나보실 수 있도록 준비하고 있습니다.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="bg" src="/images/soccer-g6900feb73_1920.jpg" alt="" />
          <div className="container">
            <div className="title">
              <h4>SERVICE</h4>
            </div>
            <div className="content">
              <p>제품의 문제가 생겼을경우 제조사 AS가 가능합니다.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
