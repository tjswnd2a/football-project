import React from 'react';
import Header from './Header';
import MainView from './component/MainView';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//https://www.drrobbin.com/
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
