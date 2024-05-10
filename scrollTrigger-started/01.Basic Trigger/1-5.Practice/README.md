# 📖 Basic Trigger 실습

## 😍 구현 애니메이션

- 스크롤에 따라 교차하는 애니메이션
- Pin 효과
- Scrub 효과
- 로딩 기능

## 🤔 스크립트 설명

### 1. 애니메이션 관련 함수

```
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
```

```
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
```

```
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
```

이렇게 함수 안에 애니메이션을 넣고 init함수 안에 다시 한꺼번에 넣어준다.

```
function init() {
  showDemo();
  awesome();
  tryNow();
}
```

### 2. 로딩 관련 함수

```
const img = gsap.utils.toArray("img");
const loader = document.querySelector(".loader--text");

const updateProgress = (instance) => {
  loader.textContent = `${Math.round(
    (instance.progressedCount * 100) / img.length
  )}%`;
};

imagesLoaded(img)
  .on("progress", updateProgress)
  // 로딩 후 처리
  .on("always", init);

```

- imageLoaded 라이브러리 사용: https://imagesloaded.desandro.com/
- 이미지들을 배열로 저장해서 사용한다.<br />

보통 유사배열로 저장된 이미지를 배열로 바꿔서 저장한다.<br />
유사 배열은 배열과 유사한 동작을 하지만 배열보다 제한된 기능을 가지며, 배열은 요소에 접근하고 조작하는 데 더 많은 유연성을 제공한다.<br />

💦 배열로 저장하는 방법

- gsap 사용 시 : `const img = gsap.utils.toArray("img");`
- 보통 자바스크립트 사용 시 :

```
const img = Array.from(document.querySelectorAll("img"));
```

```
const img = Array.prototype.slice.call(document.querySelectorAll("img"));
```

```
const img = [...document.querySelectorAll("img")];
```
