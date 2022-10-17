import './Healthy.scss';

export default function Healthy() {
  return (
    <div className="healthy-food">
      <div className="inner">
        <h4>DR.ROBBIN HEALTHY FOOD</h4>
        <div className="food-menu">

          <div className="item-L">
            <img src="images/Untitled-2.jpg" alt="" />
          </div>

          <div className="item-R">
            <div className="item">
              <img src="images/grid-pizza.jpg" alt="" />
              <img src="images/Seafood-Pasta.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/grid-coffee.jpg" alt="" />
              <img src="images/grid-ice-cream.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}