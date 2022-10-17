import './CustomerService.scss';

export default function CustomerService() {
  return (
    <div className='customer-service'>
      <div className="inner">
        <div className="service">
          <div className="title">
            <h4>
              BOOK<br />
              YOUR TABLE
            </h4>
          </div>
          <div className="content">
            <p>
              매장 예약은 전화예약과<br />
              온라인 예약 모두 가능 합니다.<br />
              아래 링크를 통해 원하시는 매장에서<br />
              예약을 진행하실 수 있습니다.
            </p>
          </div>
          <button className="btn-common">예약하기</button>
        </div>

        <div className="service">
          <div className="title">
            <h4 className="contact">CONTACT US</h4>
          </div>
          <div className="content">
            <p>
              닥터로빈은 고객님의 소리에<br />
              귀를 기울입니다.<br />
              이용하시면서 불편한 점이나<br />
              개선이 필요한 점이 있다면 알려주세요.
            </p>
          </div>
          <button className="btn-common">고객의 소리</button>
        </div>
      </div>
    </div>
  )
}