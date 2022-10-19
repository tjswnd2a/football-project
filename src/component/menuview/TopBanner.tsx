import "./TopBanner.scss";
import TopBannerAni from "../../Animation/TopBannerAni";
import { useEffect } from "react";

export default function TopBanner({ background, title, content_one, content_two }
  : { background: string, title: string, content_one: string, content_two: string }) {
  useEffect(() => {
    TopBannerAni();
  }, [])
  return (
    <div className="top-banner">
      <div className="bg">
        <img src={background} alt="" />
      </div>
      <div className="inner">
        <h4>{title}</h4>
        <div className="line"></div>
        <p className="one">{content_one}</p>
        <p className="two">{content_two}</p>
      </div>
    </div>
  );
}