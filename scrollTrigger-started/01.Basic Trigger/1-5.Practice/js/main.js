// const tween = gsap.fromTo(
//   ".wrapper.text",
//   { x: "100%" },
//   {
//     x() {
//       return -(this.targets()[0].scrollWidth - innerWidth);
//     },
//   }
// );

// const tween = gsap.fromTo(
//   ".wrapper.text",
//   {
//     x() {
//       return -this.targets()[0].scrollWidth;
//     },
//   },
//   { x: 0 }
// );

// ScrollTrigger.create({
//   trigger: ".demo-text",
//   animation: tween,
//   markers: true,
//   scrub: true,
// });

// 반복문을 통해 지그재그 교차 애니메이션 (스크롤 트리거)
gsap.utils.toArray("section").forEach((section, index) => {
  const w = section.querySelector(".wrapper");

  if (w) {
    const [x, xEnd] =
      index % 2
        ? ["100%", -(w.scrollWidth - innerWidth)]
        : [-(w.scrollWidth - innerWidth), 0];

    gsap.fromTo(
      w,
      { x },
      { x: xEnd, scrollTrigger: { trigger: section, scrub: 0.5 } }
    );
  }
});
