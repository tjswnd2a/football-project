import './MainView.scss';
import '../common.scss';
import MainImg from './mainview/MainImg';
import AboutRobbin from './mainview/AboutFootball';
import GoodQuality from './mainview/GoodQuality';
import BrandStore from './mainview/BrandStore';
import Stores from './mainview/Stores';
import CustomerService from './mainview/CustomerService';
import MainViewAni from '../Animation/MainViewAni';
import { useEffect } from 'react';
export default function MainView() {
  useEffect(() => {
    MainViewAni();
  }, []);
  return (
    <>
      <section className='main-screen'>
        <MainImg />
        <AboutRobbin />
        <GoodQuality />
        <BrandStore />
        <Stores />
        <CustomerService />
      </section>
    </>
  )
}