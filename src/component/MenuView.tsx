import { useEffect, useState } from 'react';
import { getDatabase, setBanner, setMenuList } from '../function/dbload';
import TopBanner from "./menuview/TopBanner";
import BrandType from "./menuview/BrandType";
import Brand from "./menuview/Brand";
// import MenuViewAni from "../Animation/MenuViewAni";

import './MenuView.scss'
export default function MenuView({ brand_name }: { brand_name: string }) {

  const [data, setData] = useState<Array<any>>([]);
  const [dbConnect, setConnect] = useState<boolean>(false);
  const [imgLoad, setImgLoad] = useState<boolean>(false);

  const [menuBanner, setMenuBanner] = useState<Array<any>>([]);
  const [brandList, setBrandList] = useState<Array<any>>([]);

  useEffect(() => {
    setData(getDatabase(brand_name));
    setConnect(true);
    // MenuViewAni();
  }, []);

  useEffect(() => {
    if (dbConnect) {
      setMenuBanner(setBanner(data));
      setBrandList(setMenuList(data));
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
      <BrandType active_name={brand_name} />

      <div className="container">
        <div className="inner">
          {
            brandList.map((item) =>
              <Brand
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