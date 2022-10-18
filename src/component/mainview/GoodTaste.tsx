import { useEffect,useState, useRef } from 'react';
import './GoodTaste.scss';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GoodTaste() {

  useEffect(()=> {
    
  },[])
  return (
    <div className="good-taste">
      <div className="inner">
      <h4>About Dr.Robbin</h4>

        {/* <h4>Good in more than just taste.</h4> */}
        <p className="content">
          우리는 건강한 ‘콩 크림’소스를 사용합니다.<br />
          생크림, 버터 등 동물성 지방은 사용하지 않으며 100%국내산 콩으로 만든<br />
          신개념 건강 크림소스를 사용하여 맛은 물론 음식의 건강함을 추구합니다.
        </p>
      </div>
    </div>
  );
}