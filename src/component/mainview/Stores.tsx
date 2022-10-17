import './Stores.scss'

export default function Stores() {
  return (
    <div className="stores">
      <h4>Stores</h4>
      <div className="content">
        <p>
          “정직의 원칙을 지키기 위하여 쉬운 길을 포기합니다”
        </p>
      </div>
      <div className="detail-content">
        <p>
          닥터로빈 브랜드 철학을 유지하기 위해 본사가 100% 직접 운영하고 있습니다.<br />
          건강과 관련된 사소한 문제도 발생하지 않도록 본사에서 직접 꼼꼼하게 관리합니다.
        </p>
      </div>
      <button className='btn-common'>View Our Stores</button>
    </div>
  )
}