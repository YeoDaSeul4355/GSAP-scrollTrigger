gsap.registerPlugin(ScrollTrigger);

// 스크롤 요소 설정
const scrollElement = [
  {
    target: document.querySelector("#container"),
    scrollName: null,
    marker: "main",
  },
  {
    target: document.querySelector(".deep"),
    scrollName: null,
    marker: "deep",
  },
];

// 옵션 설정
const options = {
  damping: 0.05,
  alwaysShowTracks: true,
};

// 스크롤바 초기화 및 ScrollTrigger 설정
scrollElement.forEach((elem) => {
  elem.scrollName = Scrollbar.init(elem.target, { ...options });

  ScrollTrigger.scrollerProxy(elem.target, {
    scrollTop(value) {
      if (arguments.length) {
        elem.scrollName.scrollTop = value;
      }
      return elem.scrollName.scrollTop;
    },
  });

  elem.scrollName.addListener(ScrollTrigger.update);
});

// ScrollTrigger 생성
ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom center",
  scroller: scrollElement[0].target,
  animation: gsap.to(".section02 h2", { x: 500 }),
  markers: true,
  scrub: true,
  id: scrollElement[0].marker,
});

ScrollTrigger.create({
  trigger: ".d2",
  start: "top center",
  end: "bottom center",
  scroller: scrollElement[1].target,
  animation: gsap.to(".text", { x: 200 }),
  markers: true,
  scrub: true,
  id: scrollElement[1].marker,
});

// 마커 위치 조정
scrollElement.forEach((elem) => {
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray(`[class *= "marker-${elem.marker}"]`);

    elem.scrollName.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
    });
  }
});
