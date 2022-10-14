import './Header.scss';
import { useState } from 'react';

export default function Header() {
  const [menuBtn, setMenuBtn] = useState<string>("hambergur-menu");
  const [itemList, setItemList] = useState<string>("menu-item");
  const False: number = -1;
  const onClick = () => {

    if (menuBtn.indexOf(' show') === False &&
      itemList.indexOf(' show') === False) {
      setMenuBtn(props => props = props + ' show');
      setItemList(props => props = props + ' show');
    } else {
      setMenuBtn(props => props = props.replace(' show', ''));
      setItemList(props => props = props.replace(' show', ''));
    }
  };
  return (
    <>
      <header>
        <div className="inner">
          <div className="logo">
            <img src="images/dr-robbin-logo-green-150.png" alt="" />
          </div>

          <div className={menuBtn} onClick={onClick}>
            <span className="material-symbols-outlined">menu</span>
          </div>

          <div className={itemList}>
            <ul className="menu">
              <li className="item1">
                <a href="#" className="title-dr">DR.Robbin ▾</a>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <a href="#">About</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Lab</a>
                  </li>
                </ul>
              </li>
              <li className="item2">
                <a href="#" className="title-menu">MENU ▾</a>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <a href="#">New-Menu</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Apppetizer</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Pizza</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Rice</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Kids</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Special</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Beverage</a>
                  </li>
                </ul>
              </li>
              <li className="item">
                <a href="#">STORE</a>
              </li>
              <li className="item">
                <a href="#">EVENT</a>
              </li>
              <li className="item">
                <a href="#">RECRUIT</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}