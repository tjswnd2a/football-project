import './Header.scss';
import React, { useState, useEffect } from 'react';
import { getDatabase } from './function/dbload';

export default function Header() {
  const [menuBtn, setMenuBtn] = useState<string>("hambergur-menu");
  const [itemList, setItemList] = useState<string>("menu-item");
  const False: number = -1;

  const [clickItem,setClickItem] = useState<string>("");
  const [itemArray, setItemArray] = useState<Array<Object>>([]);
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

  const getName = (e: any) => {
    console.log(e.target.innerHTML);
    setClickItem(e.target.innerHTML);
  }
  useEffect(()=> {
    setItemArray(getDatabase(clickItem));
  },[clickItem]);
  useEffect(()=> {
  },[itemArray])
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
                    <a href="#" onClick={getName}>Appetizer</a>
                  </li>
                  <li className="sub-item">
                    <a href="#" onClick={getName}>Pizza</a>
                  </li>
                  <li className="sub-item">
                    <a href="#" onClick={getName}>Rice</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Kids</a>
                  </li>
                  <li className="sub-item">
                    <a href="#">Special</a>
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