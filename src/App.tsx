import React from "react";
import Header from "./Header";
import MainView from "./component/MainView";
import AppetizerPage from "./component/AppetizerPage";
import PizzaPage from "./component/PizzaPage";
import RicePage from "./component/RicePage";
import KidsPage from "./component/KidsPage";
import PastaPage from "./component/PastaPage";
import SpecialPage from "./component/SpecialPage";
import PurchasePage from "./component/purchase_page/PurchasePage";

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="/purchase" element={<PurchasePage />}></Route>
          <Route path="/Nike" element={<AppetizerPage />}></Route>
          <Route path="/Adidas" element={<PizzaPage />}></Route>
          <Route path="/PUMA" element={<RicePage />}></Route>
          <Route path="/MIZUNO" element={<PastaPage />}></Route>
          <Route path="/UMBRO" element={<KidsPage />}></Route>
          <Route path="/UnderArmour" element={<SpecialPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
