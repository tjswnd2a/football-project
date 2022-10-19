import { useEffect, useState } from 'react';
import { getDatabase, setBanner, setMenuList } from '../function/dbload';
import TopBanner from "./menuview/TopBanner";
import FoodType from "./menuview/FoodType";
import Food from "./menuview/Food";
// import MenuViewAni from "../Animation/MenuViewAni";

import './MenuView.scss'
export default function MenuView({ food_name }: { food_name: string }) {

  const [data, setData] = useState<Array<any>>([]);
  const [dbConnect, setConnect] = useState<boolean>(false);
  const [imgLoad, setImgLoad] = useState<boolean>(false);

  const [menuBanner, setMenuBanner] = useState<Array<any>>([]);
  const [foodList, setFoodList] = useState<Array<any>>([]);

  useEffect(() => {
    setData(getDatabase(food_name));
    setConnect(true);
    // MenuViewAni();
  }, []);

  useEffect(() => {
    if (dbConnect) {
      setMenuBanner(setBanner(data));
      setFoodList(setMenuList(data));
      setImgLoad(true);
    }
  }, [data])

  return (
    <div className="menu-view">
      {imgLoad ? (
        <TopBanner
          background={menuBanner[0].background}
          title={menuBanner[0].title}
          content_one={menuBanner[0].content_one}
          content_two={menuBanner[0].content_two}
        />
      ) : null
      }
      <FoodType active_name={food_name} />

      <div className="container">
        <div className="inner">
          {
            foodList.map((item) =>
              <Food
                bg={item.img}
                name={item.name}
                en_name={item.en_name}
                price={item.price}
                content_one={item.content_one}
                content_two={item.content_two}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}