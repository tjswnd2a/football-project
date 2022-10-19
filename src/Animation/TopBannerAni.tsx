import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export default function TopBannerAni() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.top-banner .inner h4', 1, {
    opacity: 1,
    transform: "translateX(0)"
  });

  gsap.to('.top-banner .inner .one', 1, {
    opacity: 1,
    transform: "translateX(0)"
  });

  gsap.to('.top-banner .inner .two', 1, {
    delay: .3,
    opacity: 1,
    transform: "translateX(0)"
  })
}