// 🖐️ Scrub
// ScrollTrigger의 Scrub 속성을 사용하면 스크롤할 때 애니메이션의 progress()를 제어할 수 있음
// - Boolean : "scrub: true" 애니메이션의 진행 상황을 ScrollTrigger의 진행 상황에 직접 연결
// - Number : 재생 헤드가 ‘tracking’ 하는데 걸리는 시간(초)으로 "scrub:0.5" 애니메이션의 재생 헤드가 스크롤 막대의 위치를 따라잡는데 0.5초의 시간이 걸림

// const textWidth = document.querySelector(".textContainer");
// gsap.to(".textContainer", {
//   x() {
//     return -(this.targets()[0].offsetWidth - innerWidth);
//   },
//   scrollTrigger: {
//     trigger: ".demo-text",
//     start: "20% center",
//     end: "80% center",
//     markers: true,
//     scrub: 5,
//   },
// });

// const textTween = gsap.to(".textContainer", {
//   x() {
//     return -(this.targets()[0].offsetWidth - innerWidth);
//   },
// });

// ScrollTrigger.create({
//   trigger: ".demo-text",
//   start: "20% center",
//   end: "80% center",
//   markers: false,
//   scrub: 1,
//   animation: textTween,
// });

// const imageTween = gsap.from(".imageContainer", {
//   x() {
//     return -(this.targets()[0].offsetWidth - innerWidth);
//   },
// });

// ScrollTrigger.create({
//   trigger: ".demo-image",
//   start: "20% center",
//   end: "80% center",
//   scrub: 1,
//   animation: imageTween,
// });

gsap.utils.toArray(".section").forEach((section, index) => {
  const w = section.querySelector(".wrapper");

  if (w) {
    let [x, xEnd] =
      index % 2
        ? ["0", (w.offsetWidth - innerWidth) * -1]
        : [(w.offsetWidth - innerWidth) * -1, 0];
    gsap.fromTo(
      w,
      {
        x,
      },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          start: "20% center",
          end: "80% center",
          scrub: 1,
          markers: true,
        },
      }
    );
  }
});

// Object shorthand property

function generateObject(name, age, gender) {
  return {
    name,
    age,
    gender,
  };
}

const person1 = generateObject("범샘", 36, "male");

console.log(person1);
