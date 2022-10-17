import './MainView.scss';
import MainImg from './mainview/MainImg';
import AboutRobbin from './mainview/AboutRobbin';
import GoodTaste from './mainview/GoodTaste';
export default function MainView() {
  return (
    <>
      <section className='main-screen'>
        <MainImg />
        <AboutRobbin />
        <GoodTaste />
      </section>
    </>
  )
}