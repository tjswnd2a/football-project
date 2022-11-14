import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function MainViewAni() {
  gsap.registerPlugin(ScrollTrigger);

  // GoodQuality Section Animation
  gsap.to(".good-quality .inner h4", 1, {
    scrollTrigger: ".good-quality .inner .content",
    ease: "ease",
    opacity: 1,
    transform: "translateY(0)",
  });
  gsap.to(".good-quality .inner .content", 1, {
    scrollTrigger: ".good-quality .inner .content",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });

  //Healthy Section Animation
  gsap.to(".brand-store .item-line1 .item .nike", 1, {
    scrollTrigger: ".brand-store .item-line1",
    delay: 0.3,
    opacity: 1,
    transform: "translateX(0)",
  });

  gsap.to(".brand-store .item-line1 .item .adidas", 1, {
    scrollTrigger: ".brand-store .item-line1",
    delay: 0.5,
    opacity: 1,
    transform: "translateX(0)",
  });

  gsap.to(".brand-store .item-line1 .item .puma", 1, {
    scrollTrigger: ".brand-store .item-line1",
    delay: 0.8,
    opacity: 1,
    transform: "translateX(0)",
  });

  gsap.to(".brand-store .item-line2 .item .mizuno", 1, {
    scrollTrigger: ".brand-store .item-line2",
    delay: 0.8,
    opacity: 1,
    transform: "translateX(0)",
  });

  gsap.to(".brand-store .item-line2 .item .umbro", 1, {
    scrollTrigger: ".brand-store .item-line2",
    delay: 0.5,
    opacity: 1,
    transform: "translateX(0)",
  });

  gsap.to(".brand-store .item-line2 .item .underarmour", 1, {
    scrollTrigger: ".brand-store .item-line2",
    delay: 0.3,
    opacity: 1,
    transform: "translateX(0)",
  });
  // Stores Section Animation
  gsap.to(".stores h4", 1, {
    scrollTrigger: ".stores h4",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });
  gsap.to(".stores .content", 1, {
    scrollTrigger: ".stores .content",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });

  gsap.to(".stores .detail-content", 1, {
    scrollTrigger: ".stores .content",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });

  gsap.to(".stores button", 1, {
    scrollTrigger: ".stores button",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });

  //CustomerService Section Animation
  gsap.to(".customer-service .inner .service .title", 1, {
    scrollTrigger: ".customer-service .inner .service .title",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });

  gsap.to(".customer-service .inner .service .content", 1, {
    scrollTrigger: ".customer-service .inner .service .content",
    delay: 0.3,
    opacity: 1,
    transform: "translateY(0)",
  });

  gsap.to(".customer-service .inner .service button", 1, {
    scrollTrigger: ".customer-service .inner .service .content",
    delay: 0.2,
    opacity: 1,
    transform: "translateY(0)",
  });
}
