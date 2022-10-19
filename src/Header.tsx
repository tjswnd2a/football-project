import './Header.scss';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
            <Link to={'/'}>
              <img src="/images/dr-robbin-logo-green-150.png" alt="" />
            </Link>
          </div>

          <div className={menuBtn} onClick={onClick}>
            <span className="material-symbols-outlined">menu</span>
          </div>

          <div className={itemList}>
            <ul className="menu">
              <li className="item1">
                <a href="javascript:void(0)" className="title-dr">DR.Robbin ▾</a>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li className="sub-item">
                    <a href="javascript:void(0)">Lab</a>
                  </li>
                </ul>
              </li>
              <li className="item2">
                <a href="javascript:void(0)" className="title-menu">MENU ▾</a>
                <ul className="sub-menu">
                  <Link to={'/Appetizer'} state={{ name: "Appetizer" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">Appetizer</a>
                    </li>
                  </Link>
                  <Link to={'/Pizza'} state={{ name: "Pizza" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">Pizza</a>
                    </li>
                  </Link>
                  <Link to={'/Pasta'} state={{ name: "Pasta" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">Pasta</a>
                    </li>
                  </Link>
                  <Link to={'/Rice'} state={{ name: "Rice" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">Rice</a>
                    </li>
                  </Link>
                  <Link to={'/Kids'} state={{ name: "Kids" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">Kids</a>
                    </li>
                  </Link>
                  <Link to={'/Special'} state={{ name: "Special" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">Special</a>
                    </li>
                  </Link>

                </ul>
              </li>
              <li className="item">
                <Link to={'/'} onClick={onClick}>
                  <a href="javascript:void(0)">STORE</a>
                </Link>
              </li>
              <li className="item">
                <Link to={'/'} onClick={onClick}>
                  <a href="javascript:void(0)">EVENT</a>
                </Link>
              </li>
              <li className="item">
                <Link to={'/'} onClick={onClick}>
                  <a href="javascript:void(0)">RECRUIT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}