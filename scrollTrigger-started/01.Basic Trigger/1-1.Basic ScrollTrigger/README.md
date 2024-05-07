# 🌞 ScrollTrigger
GSAP의 ScrollTrigger 플러그인은 페이지 스크롤에 따라 요소의 애니메이션을 트리거하는 데 사용된다.

## 😍 ScrollTrigger 공식 문서
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

## 👀 ScrollTrigger의 특징
- 스크롤 기반 애니메이션: 페이지 스크롤 위치에 따라 요소의 애니메이션을 제어할 수 있다.
- 트리거 지점 설정: 스크롤 위치, 요소의 위치 또는 페이지의 다른 요소와의 상호 작용에 따라 애니메이션을 트리거할 지점을 설정할 수 있다.
- 스크롤 애니메이션 제어: 스크롤 속도, 반응성 및 재생 방향을 조절하여 스크롤에 따른 애니메이션을 미세 조정할 수 있다.
- 높은 성능: GSAP의 ScrollTrigger는 높은 성능을 제공하여 부드러운 애니메이션을 제어할 수 있다.

## 🖐️ scrollTrigger 쓰는 방법
1. tween 안에 연결해서 사용
```
gsap.to(".tiger", {
  x: 500,
  rotation: 360,
  duration: 3,
  scrollTrigger: {
    trigger: ".tigerSection",
    markers: true,
    start: "top center",
    end: "bottom center",
    id: "tiger",
  },
});
```
2. 생성자로 만들어서 사용
```
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
```

### 🤔 toggleActions
연결된 애니메이션이 4개의 고유한 토글 위치에 따라 순서대로 제어되는 방식을 결정<br />
기본 값은 ```play none none none```

events: onEnter onLeave onEnterBack onLeaveBack<br />
```toggleActions: "restart resume reverse reset";```<br />
options: play, pause, resume, reset, restart, complete, reverse, none
