import "./CustomerService.scss";

export default function CustomerService() {
  return (
    <div className="customer-service">
      <div className="bg-cover"></div>
      <div className="inner">
        <div className="service">
          <div className="title">
            <h4 className="contact">PURCHASE</h4>
          </div>
          <div className="content">
            <p>
              축구화 판매방식은
              <br />
              매장방문, 온라인으로 이루어져 있습니다.
              <br />
              아래 버튼을 클릭시
              <br />
              구매를 진행하실 수 있습니다.
            </p>
          </div>
          <button className="btn-common">구매하기</button>
        </div>

        <div className="service">
          <div className="title">
            <h4 className="contact">CONTACT US</h4>
          </div>
          <div className="content">
            <p>
              SJ.Football은 고객님의 소리에
              <br />
              귀를 기울입니다.
              <br />
              이용하시면서 불편한 점이나
              <br />
              개선이 필요한 점이 있다면 알려주세요.
            </p>
          </div>
          <button className="btn-common">고객의 소리</button>
        </div>
      </div>
    </div>
  );
}
