import "./AboutPage.scss";
export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="top-banner">
        <div className="cover">
          <h4>About Project</h4>
        </div>
      </div>

      <div className="inner">
        <h4>안녕하세요</h4>
        <h3>Font-end 지원자 김선중입니다.</h3>
        <h2>About Project</h2>

        <p>이 프로젝트는 타입 스크립트와 리액트, scss로 구현을 하였습니다.<br />
          리액트의 장점을 활용하여 헤더와 같이 반복되어 나오는 컴포넌트를<br />
          재활용하고 타입스크립트로 타입을 명시하여 useState에 적용하였습니다.<br />
        </p>
        <p>
          Database대신 JSON파일에 데이터 정보를 저장하여 활용하였으며<br />
          헤더 컴포넌트는 반응형을 적용하였습니다.
        </p>
        <p>
          리액트의 useState와 useEffect를 사용하여 동적인 상태 변화와<br />
          gsap 라이브러리를 사용하여 동적인 애니메이션을 적용하였습니다.
        </p>
        <div className="github">
          <a href="https://github.com/tjswnd2a/football-project">
            <img src="/images/github.png" alt="" />
          </a>
        </div>
      </div>
    </div >

  )
}