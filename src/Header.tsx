import "./Header.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuBtn, setMenuBtn] = useState<string>("hambergur-menu");
  const [itemList, setItemList] = useState<string>("menu-item");
  const False: number = -1;

  const onClick = () => {
    if (
      menuBtn.indexOf(" show") === False &&
      itemList.indexOf(" show") === False
    ) {
      setMenuBtn((props) => (props = props + " show"));
      setItemList((props) => (props = props + " show"));
    } else {
      setMenuBtn((props) => (props = props.replace(" show", "")));
      setItemList((props) => (props = props.replace(" show", "")));
    }
  };

  return (
    <>
      <header>
        <div className="inner">
          <div className="logo">
            <Link to={"/"}>
              <img src="/images/mainlogo.png" alt="" />
            </Link>
          </div>

          <div className={menuBtn} onClick={onClick}>
            <span className="material-symbols-outlined">menu</span>
          </div>

          <div className={itemList}>
            <ul className="menu">
              <li className="item1">
                <a href="javascript:void(0)" className="title-dr">
                  SJ.Football ▾
                </a>
                <ul className="sub-menu">
                  <Link to={"/about"} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">About</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="item2">
                <a href="javascript:void(0)" className="title-menu">
                  BRAND ▾
                </a>
                <ul className="sub-menu">
                  <Link to={"/Nike"} state={{ name: "Nike" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">NIKE</a>
                    </li>
                  </Link>
                  <Link
                    to={"/Adidas"}
                    state={{ name: "Adidas" }}
                    onClick={onClick}
                  >
                    <li className="sub-item">
                      <a href="javascript:void(0)">ADIDAS</a>
                    </li>
                  </Link>
                  <Link to={"/PUMA"} state={{ name: "PUMA" }} onClick={onClick}>
                    <li className="sub-item">
                      <a href="javascript:void(0)">PUMA</a>
                    </li>
                  </Link>
                  <Link
                    to={"/MIZUNO"}
                    state={{ name: "MIZUNO" }}
                    onClick={onClick}
                  >
                    <li className="sub-item">
                      <a href="javascript:void(0)">MIZUNO</a>
                    </li>
                  </Link>
                  <Link
                    to={"/UMBRO"}
                    state={{ name: "UMBRO" }}
                    onClick={onClick}
                  >
                    <li className="sub-item">
                      <a href="javascript:void(0)">UMBRO</a>
                    </li>
                  </Link>
                  <Link
                    to={"/UnderArmour"}
                    state={{ name: "UnderArmour" }}
                    onClick={onClick}
                  >
                    <li className="sub-item">
                      <a href="javascript:void(0)">UNDER ARMOUR</a>
                    </li>
                  </Link>
                </ul>
              </li>
              <li className="item">
                <Link to={"/"} onClick={onClick}>
                  <a href="javascript:void(0)">STORE</a>
                </Link>
              </li>
              <li className="item">
                <Link to={"/"} onClick={onClick}>
                  <a href="javascript:void(0)">EVENT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
