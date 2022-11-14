import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PurchasePage.scss";

export default function PurchasePage() {
  const location = useLocation();
  const [result, setResult] = useState<number>(0);
  let shoes_size: number = 230;
  const regex: RegExp = /[^0-9]/g;

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
    // let result: string = temp.replace(regex, "");
    console.log(event.target.outerText);
    // setResult(Number(temp.replace(regex, "")));
  };
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);
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
            {/* <ul>
              <li>230</li>
              <li>235</li>
              <li>240</li>
              <li>245</li>
              <li>250</li>
            </ul>
            <ul>
              <li>255</li>
              <li>260</li>
              <li>265</li>
              <li>270</li>
              <li>275</li>
            </ul>
            <ul>
              <li>280</li>
              <li>285</li>
              <li>290</li>
              <li>295</li>
              <li>300</li>
            </ul> */}
          </div>
          <h3>선택된 사이즈: </h3>
          <div className="button-box">
            <button>구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
