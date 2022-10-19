import './MainView.scss';
import '../common.scss';
import MainImg from './mainview/MainImg';
import AboutRobbin from './mainview/AboutRobbin';
import GoodTaste from './mainview/GoodTaste';
import Healthy from './mainview/Healthy';
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
        <GoodTaste />
        <Healthy />
        <Stores />
        <CustomerService />
      </section>
    </>
  )
}