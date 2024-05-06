// 🖐️ scrollTrigger 쓰는 방법

// - tween 안에 연결
// gsap.to(".tiger", {
//   x: 500,
//   rotation: 360,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".tigerSection",
//     markers: true,
//     start: "top center",
//     end: "bottom center",
//     id: "tiger",
//   },
// });

// - 생성자로 만들어서
const tween = gsap.to(".tiger", {
  x: 500,
  rotation: 360,
  duration: 3,
});

ScrollTrigger.create({
  trigger: ".tigerSection",
  markers: true,
  start: "top center",
  end: "bottom center",
  id: "tiger",
  animation: tween,
  toggleActions: "restart pause reverse pause",
});

// 🪄 toggleActions
// 연결된 애니메이션이 4개의 고유한 토글 위치에 따라 순서대로 제어되는 방식을 결정
// 기본값은 play none none none

// events: onEnter onLeave onEnterBack onLeaveBack
// toggleActions: "restart resume reverse reset";
//options: play, pause, resume, reset, restart, complete, reverse, none
