// 🖐️ Parallax Scrolling
// 시차 스크롤을 주는 애니메이션

// const tl = gsap
//   .timeline()
//   .to(".layer-bg", { y: -100 })
//   .to(".layer-1", { y: -50 }, 0)
//   .to(".layer-2", { y: -80 }, 0)
//   .to(".layer-3", { y: -20 }, 0)
//   .to(
//     ".layer-4",
//     {
//       y() {
//         return -this.targets()[0].offsetHeight;
//       },
//       ease: "none",
//     },
//     0
//   )
//   .to(".layer-overlay", { y: -60 }, 0);
// ScrollTrigger.create({
//   trigger: "#hero",
//   start: "top top",
//   end: "bottom top",
//   animation: tl,
//   scrub: true,
//   markers: true,
// });

// 반복문 안에 스크롤 트리거 생성
// 반복문 안에 스크롤 트리거가 있으므로 성능 저하.. (6번이나 부름)
// gsap.utils.toArray(".parallax").forEach((layer) => {
//   const depth = layer.dataset.depth;
//   const movement = -(layer.offsetHeight * depth);

//   ScrollTrigger.create({
//     trigger: "#hero",
//     start: "top top",
//     end: "bottom top",
//     animation: gsap.to(layer, { y: movement, ease: "none" }),
//     scrub: true,
//     markers: true,
//   });
// });

// 스크롤 트리거를 밖에 빼서 tl을 애니메이션 걸어줌
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top",
    end: "bottom top",
    scrub: true,
  },
});

// ScrollTrigger.create({
//   trigger: "#hero",
//   start: "top",
//   end: "bottom top",
//   animation: tl,
//   scrub: true,
//   markers: true,
// });

gsap.utils.toArray(".parallax").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);

  tl.to(layer, { y: movement, ease: "none" }, 0);
});
