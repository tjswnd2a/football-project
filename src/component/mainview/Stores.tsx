import "./Stores.scss";

export default function Stores() {
  return (
    <div className="stores">
      <div className="bg-cover"></div>
      <h4>Stores</h4>
      <div className="content">
        <p>“전국 신뢰도1위 전문 쇼핑몰”</p>
      </div>
      <div className="detail-content">
        <p>
          빠른배송과 정직한 가격으로 만나보실 수 있도록 준비하고 있습니다.
          <br />
          이벤트로 많은 혜텍도 받아보세요.
        </p>
      </div>
      <button className="btn-common">View Our Stores</button>
    </div>
  );
}
