import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BrandType.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function BrandType({ active_name }: { active_name: string }) {
  const [brand_type, setBrandType] = useState<Array<string>>([
    "Nike",
    "Adidas",
    "Puma",
    "Mizuno",
    "Umbro",
    "UnderArmour",
  ]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    brand_type.map((item: string) => {
      if (item === active_name) {
        gsap.to(`.brand-type .inner .type .${item}`, 0, {
          fontWeight: "500",
          color: "black",
        });
      }
    });
  }, [brand_type]);
  return (
    <div className="brand-type">
      <div className="inner">
        <ul className="type">
          {brand_type.map((item: string) => (
            <Link to={`/${item}`} state={{ name: item }}>
              <li className={item}>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
