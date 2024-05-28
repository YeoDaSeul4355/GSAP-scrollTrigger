# 💫 Parallax

Parallax 효과는 웹 페이지에서 스크롤 시 배경 이미지가 앞의 콘텐츠보다 더 느리게 움직이도록 하여 깊이감을 주는 시각적 기법이다.<br/>
이질감 효과라고도 불림!

## 👀 GSAP를 이용한 Parallax 효과 구현

```javascript
// GSAP와 ScrollTrigger 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

// Parallax 효과 적용
gsap.to(".parallax-background", {
  y: "-25%", // 배경 이미지를 위로 이동시키는 비율
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-container",
    start: "top bottom", // 트리거가 시작되는 지점
    end: "bottom top", // 트리거가 끝나는 지점
    scrub: true, // 스크롤에 따라 애니메이션이 천천히 실행됨
  },
});
```
