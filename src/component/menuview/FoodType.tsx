import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './FoodType.scss';

import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function FoodType({ active_name }: { active_name: string }) {
  const [food_type, setFoodType] = useState<Array<string>>(
    ['Appetizer', 'Pizza', 'Rice', 'Pasta', 'Kids', 'Special']
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    food_type.map((item: string) => {
      if (item === active_name) {
        gsap.to(`.food-type .inner .type .${item}`, 0, {
          fontWeight: "500",
          color: "black"
        });
      }
    })

  }, [food_type])
  return (
    <div className="food-type">
      <div className="inner">
        <ul className="type">
          {
            food_type.map((item: string) =>
              <Link to={`/${item}`} state={{ name: item }}>
                <li className={item}>
                  {item.toUpperCase()}
                </li>
              </Link>
            )
          }
        </ul>
      </div>
    </div>
  );
}