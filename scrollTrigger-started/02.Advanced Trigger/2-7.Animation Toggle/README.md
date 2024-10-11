# 🌠 Animation Toggle

## ScrollTrigger 토글 애니메이션을 만드는 4가지 방법
- 일반 토글액션
- 조건부 애니메이션으로 onToggle
- 하나의 애니메이션과 조건부 값으로 onToggle
- onToggle 트윈 토글

### 일반 토글액션

일반 토글 액션에서 toggleActions 옵션을 사용하면 스크롤에 따라 애니메이션의 동작을 세부적으로 제어할 수 있다.<br />
```toggleActions```는 ```"onEnter onLeave onEnterBack onLeaveBack"```의 형식으로, 스크롤 방향에 따른 4가지 상태에서 어떤 동작을 실행할지 정의한다.

```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom top",
    toggleActions: "play reverse play reverse", // 각각의 상태에 따른 동작
    markers: true // 디버깅을 위한 마커 표시 (필요 시 제거)
  },
  opacity: 1,
  duration: 1,
});
```

### 조건부 애니메이션으로 onToggle
onToggle 콜백을 사용해 조건부로 애니메이션을 트리거할 수 있다.<br /> 
onToggle은 트리거가 활성화되거나 비활성화될 때 실행된다.

```javascript
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".element",
  start: "top center",
  onToggle: (self) => {
    if (self.isActive) {
      // 스크롤 트리거가 활성화될 때 애니메이션 실행
      gsap.to(".element", { opacity: 1, duration: 1 });
    } else {
      // 스크롤 트리거가 비활성화될 때 애니메이션 실행
      gsap.to(".element", { opacity: 0, duration: 1 });
    }
  },
});
```

### 하나의 애니메이션과 조건부 값으로 onToggle
애니메이션을 미리 설정해두고 onToggle에서 이를 컨트롤할 수 있다. <br /> 
같은 애니메이션을 방향에 따라 다르게 작동시키는 방식.

```javascript
gsap.registerPlugin(ScrollTrigger);

const anim = gsap.to(".element", { scale: 1.5, paused: true });

ScrollTrigger.create({
  trigger: ".element",
  start: "top center",
  onToggle: (self) => {
    self.isActive ? anim.play() : anim.reverse(); // 토글에 따라 애니메이션 재생 또는 역재생
  },
});
```

### onToggle 트윈 토글
```onToggle```과 ```gsap.to()```를 결합해 스크롤 시 요소를 트윈(Tween) 애니메이션으로 전환할 수 있다.

```javascript
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".element",
  start: "top center",
  onToggle: (self) => {
    gsap.to(".element", {
      rotation: self.isActive ? 360 : 0, // 토글에 따라 회전
      duration: 1,
    });
  },
});
```

### 📎 실습 파일 살펴보기
- [index.html](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-5.Navigation Loop/index.html>)
- [css/style.css](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-5.Navigation Loop/css/style.css>)
- [js/main.js](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-5.Navigation Loop/js/main.js>)