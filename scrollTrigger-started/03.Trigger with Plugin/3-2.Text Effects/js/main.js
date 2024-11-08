let split;

function init() {
  split = new SplitText("p", { type: "lines" });
  const splitCover = new SplitText("p", { type: "lines", linesClass: "cover" });

  split.lines.forEach((line, index) => {
    ScrollTrigger.create({
      trigger: splitCover.lines[index],
      start: "top 90%",
      end: "bottom center",
      animation: gsap.from(line, {
        opacity: 0,
        filter: "blur(10px)",
        y: 300,
        transformOrigin: "50% 50% -50",
        rotateX: -180,
      }),
      markers: true,
      scrub: true,
    });
  });
  markers();
}

// 창 크기에 대한 리사이즈가 일어날 때
// 1. revert를 통해 모든 항목을 제거
// 2. 스크롤 트리거 제거
// 3. 다시 스크롤 트리거 생성

// 여러번 발생하는 이벤트는 성능이 중요하다.
// 성능을 끌어올리는 데 필요한 throttle과 debounce(이번 예제에서 debounce만 사용)

let timeOut;

const debounc = (callback, time = 500) => {
  timeOut = setTimeout(() => {
    callback();
  }, time);
};

function killAll() {
  split.revert();
  ScrollTrigger.getAll().forEach((item) => item.kill());
  init();
}

window.addEventListener("resize", killAll);
window.addEventListener("load", init);
