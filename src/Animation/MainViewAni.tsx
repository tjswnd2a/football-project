import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function MainViewAni() {
  gsap.registerPlugin(ScrollTrigger);

  // GoodTaste Section Animation
  gsap.to('.good-taste .inner h4', 1 ,{
    scrollTrigger: '.good-taste .inner .content',
    ease: 'ease',
    opacity: 1,
    transform: 'translateY(0)'
  });
  gsap.to('.good-taste .inner .content', 1, {
    scrollTrigger: '.good-taste .inner .content',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });


  //Healthy Section Animation
  gsap.to('.healthy-food .food-menu .item-L', 1, {
    scrollTrigger: '.healthy-food .food-menu .item-L',
    delay: .3,
    opacity: 1,
    transform: 'translateX(0)'
  });

  gsap.to('.healthy-food .food-menu .item-R .item .pizza', 1, {
    scrollTrigger: '.healthy-food .food-menu .item-R',
    delay: .5,
    opacity: 1,
    transform: 'translateX(0)'
  });

  gsap.to('.healthy-food .food-menu .item-R .item .coffee', 1, {
    scrollTrigger: '.healthy-food .food-menu .item-R',
    delay: .5,
    opacity: 1,
    transform: 'translateX(0)'
  });

  gsap.to('.healthy-food .food-menu .item-R .item .pasta', 1, {
    scrollTrigger: '.healthy-food .food-menu .item-R',
    delay: .8,
    opacity: 1,
    transform: 'translateX(0)'
  });

  gsap.to('.healthy-food .food-menu .item-R .item .ice', 1, {
    scrollTrigger: '.healthy-food .food-menu .item-R',
    delay: .8,
    opacity: 1,
    transform: 'translateX(0)'
  });


  // Stores Section Animation
  gsap.to('.stores h4', 1, {
    scrollTrigger: '.stores h4',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });
  gsap.to('.stores .content', 1, {
    scrollTrigger: '.stores .content',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });

  gsap.to('.stores .detail-content', 1, {
    scrollTrigger: '.stores .content',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });

  gsap.to('.stores button', 1, {
    scrollTrigger: '.stores button',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });


  //CustomerService Section Animation 
  gsap.to('.customer-service .inner .service .title', 1, {
    scrollTrigger: '.customer-service .inner .service .title',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });

  gsap.to('.customer-service .inner .service .content', 1, {
    scrollTrigger: '.customer-service .inner .service .content',
    delay: .3,
    opacity: 1,
    transform: 'translateY(0)'
  });

  gsap.to('.customer-service .inner .service button', 1, {
    scrollTrigger: '.customer-service .inner .service .content',
    delay: .2,
    opacity: 1,
    transform: 'translateY(0)'
  });
}