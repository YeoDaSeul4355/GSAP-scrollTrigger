# 🌠 Navigation Loop

## 🙌 immediateRender

```immediateRender```는 GSAP에서 애니메이션을 생성할 때, 해당 애니메이션의 시작 값이 즉시 렌더링될지 여부를 결정하는 중요한 속성이다.<br>
이 속성은 주로 타임라인 밖의 트윈이나 스크롤 트리거와 같은 특정 이벤트와 함께 사용할 때 유용하다.<br>
기본적으로 ```immediateRender```는 ```true```로 설정되어 있어, 애니메이션이 생성되면 해당 애니메이션의 첫 프레임이 즉시 적용된다.


### 네비게이션 이벤트 주기

- 스크롤 할 때마다 섹션에 맞게끔 헤더 색 변경
```javascript
gsap.utils.toArray('.section').forEach((section, index) => {
  ScrollTrigger.create({
    trigger: section,
    // start와 end값을 함수를 통해 유동적으로 설정할 수 있다.
    start: () => `top ${nav.offsetHeight}px`, 
    end: () => `bottom ${nav.offsetHeight}px`,
    animation: gsap.to(nav, {backgroundColor: navColor[index], immediateRender: false}),
    markers:true,
    toggleActions: 'restart none none reverse',
  })
});
```

- 네비게이션 클릭해서 해당 섹션으로 이동
```javascript
gsap.utils.toArray('.nav li').forEach((li, index) => {
  li.addEventListener('click', () => {
    let sectionTop = (ScrollTrigger.getAll()[index].start + nav.offsetHeight);
    scrollbar.scrollTo(0, sectionTop, 600);
  })
})
```

### 📎 실습 파일 살펴보기
- [index.html](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-5.Navigation Loop/index.html>)
- [css/style.css](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-5.Navigation Loop/css/style.css>)
- [js/main.js](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-5.Navigation Loop/js/main.js>)