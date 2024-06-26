# 🌠 Proxy()

## 🙌 스크롤 스무스 효과

보통 인터렉티브한 웹사이트들은 스크롤 스무스 효과가 적용되어있다.<br />
GSAP에선 ScrollSmoother라는 자체 플러그인이 있지만 유료플랜이므로 다른 외부 라이브러리들을 많이 쓴다.<br />
하지만 외부 라이브러리들을 사용시 ScrollTrigger과 충돌이 날 수 있으므로 주의해야한다.

### Scroll Smoothbar 라이브러리 사용법

```javascript
// 1. 고정할 대상을 정해줌
const container = document.querySelector("#container");

// 2. 스크롤바에 옵션 부여
const scrollbar = Scrollbar.init(container, {
  // damping값이 낮아질수록 더 부드러워짐
  damping: 0.05,
  alwaysShowTracks: true,
});
```

## 💥 스크롤 스무스 라이브러리

html의 scroll이 작동하는게 아닌 애니메이션 프레임을 통해 스크롤을 처리하기 때문에 scroll관련 이벤트 요소들은 먹지않음<br />
해결책은 해당 라이브러리 내에 있는 메서드 이용.

### 스무스 라이브러리 종류

- Lenis
  https://github.com/darkroomengineering/lenis
- Smooth Scrollbar
  https://idiotwu.github.io/smooth-scrollbar/
- Locomotive Scroll
  https://github.com/locomotivemtl/locomotive-scroll
- Asscroll
  https://github.com/ashthornton/asscroll

## 🌞 scrollerProxy()

스크롤 라이브러리를 사용하여 더 복잡한 스크롤 동작을 구현해야 할 때가 있는데, 이때 scrollerProxy를 사용하여 ScrollTrigger가 커스텀 스크롤링을 인식하게 할 수 있다.<br />
특정 스크롤러 요소에 대한 scrollTop or scrollLeft 값에 대해서 getter/setter값을 하이재킹하여 부드러운 스크롤 또는 기타 사용자 정의 효과와 같은 것을 구현할 수 있다.

### scrollerProxy() 사용법

```javascript
// 3rd party library setup(스크롤 라이브러리 세팅)
const bodyScrollBar = Scrollbar.init(document.body, {
  damping: 0.1,
  delegateTo: document,
});

// ScrollTrigger에게 "body" 요소에 대해 이 프록시 getter/setter 메서드를 사용하도록 지시
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value; // setter
    }
    return bodyScrollBar.scrollTop; // getter
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

// smooth scroller가 업데이트될 때, ScrollTrigger도 업데이트하도록 지시
bodyScrollBar.addListener(ScrollTrigger.update);
```

### ♻ main.js 리팩토링 전

```javascript
gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector("#container");
const deep = document.querySelector(".deep");

const options = {
  damping: 0.05,
  alwaysShowTracks: true,
};

const scrollbar = Scrollbar.init(container, { ...options });
const deepScrollbar = Scrollbar.init(deep, { ...options });

ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value; //setter
    }
    return scrollbar.scrollTop; // getter
  },
});

ScrollTrigger.scrollerProxy(deep, {
  scrollTop(value) {
    if (arguments.length) {
      deepScrollbar.scrollTop = value; //setter
    }
    return deepScrollbar.scrollTop; // getter
  },
});

scrollbar.addListener(ScrollTrigger.update);
deepScrollbar.addListener(ScrollTrigger.update);

ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom center",
  scroller: deep,
  animation: gsap.to(".section02 h2", { x: 500 }),
  markers: true,
  scrub: true,
});

ScrollTrigger.create({
  trigger: ".d2",
  start: "top center",
  end: "bottom center",
  scroller: container,
  animation: gsap.to(".d2 .text", { x: 200 }),
  markers: true,
  scrub: true,
});

if (document.querySelector(".gsap-marker-scroller-start")) {
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

  console.log(markers);

  scrollbar.addListener(({ offset }) => {
    gsap.set(markers, { marginTop: -offset.y });
  });
}
```

### ♻ main.js 리팩토링 후

```javascript
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
  damping: 0.08,
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
```

### 💚 리팩토링 내용:

- 중복 제거 및 반복문 사용
- 데이터 구조 개선
- 옵션 설정 통합
- ScrollTrigger 설정 통합
- 마커 위치 조정 통합
