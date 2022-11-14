import "./Brand.scss";
import { Link } from "react-router-dom";
export default function Brand({
  bg,
  name,
  en_name,
  price,
  content_one,
  content_two,
}: {
  bg: string;
  name: string;
  en_name: string;
  price: string;
  content_one: string;
  content_two: string;
}) {
  return (
    <div className="brand-info">
      <div className="image">
        <Link
          to={"/purchase"}
          state={{
            img: bg,
            name: name,
            type: en_name,
            price: price,
            content_one: content_one,
            content_two: content_two,
          }}
        >
          <img src={bg} alt="" />
        </Link>
      </div>
      <h4 className="name">{name}</h4>
      <p className="en-name">{en_name}</p>
      <p className="price">{price}</p>
    </div>
  );
}
