const showDemo = () => {
  // 반복문을 통해 지그재그 교차 애니메이션 (스크롤 트리거)
  gsap.to(".loader", { autoAlpha: 0 });
  document.querySelector("body").style.overflow = "auto";

  // 새로고침 할 때 위로 가는 기능
  document.scrollingElement.scrollTo(0, 0);
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

// 😁 로딩 함수 구현
// 유사 배열을 배열로 만들어서 쓰는게 좋음
// 보통은 gsap.utils.toArray()로 배열을 만든다.
const img = gsap.utils.toArray("img");
const loader = document.querySelector(".loader--text");

// gsap를 쓰지 않을 시 유사배열을 배열로 만들어주는 방법 3가지
// const img = Array.from(document.querySelectorAll("img"));
// const img = Array.prototype.slice.call(document.querySelectorAll("img"));
// const img = [...document.querySelectorAll("img")]

const updateProgress = (instance) => {
  loader.textContent = `${Math.round(
    (instance.progressedCount * 100) / img.length
  )}%`;
};

imagesLoaded(img)
  .on("progress", updateProgress)
  // 로딩 후 처리
  .on("always", init);
