import "./Healthy.scss";
import { Link } from "react-router-dom";
export default function Healthy() {
  return (
    <div className="healthy-food">
      <div className="inner">
        <h4>FOOTBALL BRAND STORE</h4>
        <div className="brand-logo">
          <div className="item-line1">
            <div className="item">
              <Link to={"/Nike"} state={{ name: "Nike" }}>
                <img className="nike" src="/images/nikelogo.png" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link to={"/Adidas"} state={{ name: "Adidas" }}>
                <img className="adidas" src="/images/adidaslogo.png" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link to={"/PUMA"} state={{ name: "PUMA" }}>
                <img className="puma" src="/images/pumalogo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="item-line2">
            <div className="item">
              <Link to={"/MIZUNO"} state={{ name: "MIZUNO" }}>
                <img className="mizuno" src="/images/mizuno.png" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link to={"/UMBRO"} state={{ name: "UMBRO" }}>
                <img className="umbro" src="/images/umbrologo.png" alt="" />
              </Link>
            </div>
            <div className="item">
              <Link to={"/UnderArmour"} state={{ name: "UnderArmour" }}>
                <img
                  className="underarmour"
                  src="/images/underarmour.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
