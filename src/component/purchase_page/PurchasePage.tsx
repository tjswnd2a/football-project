import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PurchasePage.scss";

export default function PurchasePage() {
  const location = useLocation();
  const [result, setResult] = useState<string>("");
  let shoes_size: number = 230;

  const ul_rendering = () => {
    const result: any = [];
    for (let i = 0; i < 3; i++) {
      result.push(<ul>{li_rendering()}</ul>);
    }
    return result;
  };

  const li_rendering = () => {
    const result: any = [];
    for (let i = 0; i < 5; i++) {
      result.push(<li onClick={onClick}>{shoes_size}</li>);
      shoes_size += 5;
    }
    return result;
  };
  const onClick = (event: any) => {
    let temp: string = event.target;
    console.log(event.target.outerText);
    setResult(event.target.outerText)
  };
  return (
    <div className="purchase-page">
      <div className="inner">
        <div className="product">
          <div className="product-img">
            <img src={location.state.img} alt="none" />
          </div>
          <div className="content">
            <h4>{location.state.name}</h4>
            <p>{location.state.content_one}</p>
            <p>{location.state.content_two}</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="purchase-box">
          <div className="item-name">{location.state.name}</div>
          <div className="item-type">{location.state.type}</div>
          <div className="item-price">{location.state.price} 원</div>
          <h3>사이즈 선택</h3>
          <div className="shoes-size">
            {ul_rendering()}
          </div>
          <h3>선택된 사이즈: {result}</h3>
          <div className="button-box">
            <button>구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
