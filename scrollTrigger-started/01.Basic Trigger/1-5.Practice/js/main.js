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

const showDemo = () => {
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
};

const awesome = () => {
  const tl = gsap
    .timeline({
      defaults: {
        ease: "none",
      },
    })
    .from(".awesome .text", { x: innerWidth })
    .to(".awesome .text", { scale: 50, xPercent: -100 })
    .to("body", { duration: 0.3, backgroundColor: "black" }, "-=0.5");

  ScrollTrigger.create({
    trigger: ".awesome",
    start: "top top",
    end: "+=3000",
    pin: true,
    animation: tl,
    scrub: 1,
  });
};

const tryNow = () => {
  ScrollTrigger.create({
    trigger: ".try",
    start: "top top",
    end: "+=2000",
    animation: gsap.from(".try .text", { y: 50, opacity: 0 }),
    pin: true,
    scrub: true,
  });
};

function init() {
  showDemo();
  awesome();
  tryNow();
}
init();
