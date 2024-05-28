# 🌠 Proxy()

## 🙌 스크롤 스무스 효과

보통 인터렉티브한 웹사이트들은 스크롤 스무스 효과가 적용되어있다.<br />
GSAP에선 ScrollSmoother라는 자체 플러그인이 있지만 유료플랜이므로 다른 외부 라이브러리들을 많이 쓴다.<br />
하지만 외부 라이브러리들을 사용시 ScrollTrigger과 충돌이 날 수 있으므로 주의해야한다.

### Scroll Smoothbar 라이브러리 사용법

```
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
- https://github.com/locomotivemtl/locomotive-scroll
