# 🌠 Prevent Scroll

## 🙌 Prevent Scroll

Intro페이지나 Hero페이지에서 애니메이션을 보여주고 스크롤 활성화하는 방법을 알아보자.<br />
스크롤을 막지 않으면 애니메이션이 끝나기도 전에 스크롤을 내리는 경우가 많다. 

### 스크롤을 잠그거나 방지하는 방법

- css로 ```body``` 요소에 ```overflow: hidden```를 적용하면 스크롤이 비활성화 된다.
```css
body {
  overflow: hidden;
}
```

- ```eventCallback```활용하기
```javascript
// 애니메이션 타임라인 생성
const tl = // 애니메이션 생성

// 애니메이션이 끝나고 함수 불러옴
tl.eventCallback('onComplete', () => {
  document.body.style.overflow = ''; 
})
```

### 📎 실습 파일 살펴보기
- [index.html](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-3.PreventScroll/index.html>)
- [css/style.css](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-3.PreventScroll/css/style.css>)
- [js/main.js](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-3.PreventScroll/js/main.js>)