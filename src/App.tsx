import React from "react";
import Header from "./Header";
import MainView from "./component/MainView";
import NikePage from "./component/NikePage";
import AdidasPage from "./component/AdidasPage";
import PumaPage from "./component/PumaPage";
import UmbroPage from "./component/UmbroPage";
import MizunoPage from "./component/MizunoPage";
import UnderArmourPage from "./component/UnderArmourPage";
import PurchasePage from "./component/purchase_page/PurchasePage";
import AboutPage from "./component/about/AboutPage";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/purchase" element={<PurchasePage />}></Route>
          <Route path="/Nike" element={<NikePage />}></Route>
          <Route path="/Adidas" element={<AdidasPage />}></Route>
          <Route path="/PUMA" element={<PumaPage />}></Route>
          <Route path="/MIZUNO" element={<MizunoPage />}></Route>
          <Route path="/UMBRO" element={<UmbroPage />}></Route>
          <Route path="/UnderArmour" element={<UnderArmourPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
