import { useEffect, useState, useRef } from "react";
import "./GoodQuality.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GoodQuality() {
  useEffect(() => { }, []);
  return (
    <div className="good-quality">
      <div className="bg-cover"></div>

      <div className="inner">
        <h4>About SJ.FootBall</h4>

        <p className="content">
          우리 SJ.Football 온라인은 브랜드 지정 공식축구 전문점 입니다.
          <br />
          가품이 아닌 100% 정품만 판매하고 있습니다.
          <br />
          보다 좋은 품질, 좋은 가격으로 고개님들에게 보답하겠습니다.
        </p>
      </div>
    </div>
  );
}
