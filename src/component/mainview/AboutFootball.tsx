import "./AboutFootball.scss";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AboutFootball() {
  return (
    <div className="about-robbin">
      <div className="inner">
        <h4>About SJ.Football</h4>
        <p className="content">
          본 사이트는 수익/흥보/사업용이 아닌 개인 포트폴리오 입니다.
          <br />
        </p>
        <p className="detail-content">
          100% 정품 판매 매장 SJ.Football 입니다.
          <br />
          제품의 문제가 있을경우 제조사 AS가 가능합니다.
          <br />
          저희는 전문적인 축구 용품만을 생산, 유통하여 한국 발전에 기여하고
          있습니다.
          <br />
          축구를 사랑하는 고객분들께 오래도록 사랑과 신뢰를 받는 기업으로
          성장시켜 나갈 것이며
          <br />
          항상 최선을 다하는 기업이 되겠습니다.
          <br />
        </p>
        <div className="github">
          <a href="https://github.com/tjswnd2a/football-project">
            <img src="/images/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
