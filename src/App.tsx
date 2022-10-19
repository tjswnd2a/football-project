import React from 'react';
import Header from './Header';
import MainView from './component/MainView';
import AppetizerPage from './component/AppetizerPage';
import PizzaPage from './component/PizzaPage';
import RicePage from './component/RicePage';
import KidsPage from './component/KidsPage';
import PastaPage from './component/PastaPage';
import SpecialPage from './component/SpecialPage';

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />}></Route>
          <Route path="/Appetizer" element={<AppetizerPage />}></Route>
          <Route path="/Pizza" element={<PizzaPage />}></Route>
          <Route path="/Rice" element={<RicePage />}></Route>
          <Route path="/Pasta" element={<PastaPage />}></Route>
          <Route path="/Kids" element={<KidsPage />}></Route>
          <Route path="/Special" element={<SpecialPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
