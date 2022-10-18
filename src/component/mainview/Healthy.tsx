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
              <img className="pizza" src="images/grid-pizza.jpg" alt="" />
              <img className="pasta" src="images/Seafood-Pasta.jpg" alt="" />
            </div>
            <div className="item">
              <img className="coffee" src="images/grid-coffee.jpg" alt="" />
              <img className="ice" src="images/grid-ice-cream.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}