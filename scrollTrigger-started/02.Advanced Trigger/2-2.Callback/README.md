# 🌠 Callback

## 🙌 ScrollTrigger 콜백함수

ScrollTrigger에서 콜백 함수는 스크롤 이벤트의 특정 시점에서 실행되며, 다양한 상태 변화를 감지해 특정 로직을 수행하는 데 사용된다.

### ScrollTrigger에서 사용하는 주요 콜백함수

- ```onEnter``` : 트리거 요소가 처음으로 뷰포트에 들어올 때 실행된다.
- ```onLeave``` : 트리거 요소가 뷰포트에서 나갈 때 실행된다.
- ```onEnterBack``` : 트리거 요소가 스크롤 방향이 위로 올렸다 다시 뷰포트에 들어갈 때 실행된다.
- ```onLeaveBack``` : 트리거 요소가 스크롤 방향이 반대로 뷰포트에 나갈 때 실행된다.
- ```onUpdate``` : 스크롤할 때마다 호출되며, 트리거의 상태나 진행도에 따라 실행된다. (실시간으로 추적하는데 유용)
- ```onToggle``` : ```onEnter``` 또는 ```onLeave``` 이벤트가 발생할 때 실행된다. 

### 콜백함수 예시
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.to(".요소", {
  scrollTrigger: {
    trigger: ".요소",
    start: "top 80%",
    end: "top 30%",
    onEnter: () => console.log('Enter the viewport'),
    onLeave: () => console.log('Leave the viewport'),
    onEnterBack: () => console.log('Re-entering from reverse'),
    onLeaveBack: () => console.log('Leaving from reverse'),
    onUpdate: self => console.log(`Progress: ${self.progress}`) // 진행 퍼센트 가져옴
  },
  x: 300,
  duration: 2
});
```