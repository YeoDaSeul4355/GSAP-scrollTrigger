# 🌠 FastScrollEnd

## 🙌 FastScrollEnd

스크롤이 깊고 애니메이션이 많을 경우 사용자가 해당 지점으로 빠르게 이동하고자 한다면 굉장히 많은 애니메이션을 복잡하게 봐야 한다.<br>
fastScrollEnd 옵션은 스크롤 속도가 빠를 때 발생할 수 있는 성능 문제를 해결하는 데 사용된다.<br>

Boolean | Number - 스크롤 속도가 일정속도(2500px/s) 이상으로 스크롤 되면 ScrollTrigger의 애니메이션을 강제로 완료시켜 사용자의 편의성을 제공한다.

## 🙌 toggleClass

toggleClass는 특정 요소가 스크롤 위치에 도달하거나 벗어날 때 클래스를 추가하거나 제거하는 데 사용된다.<br>

String - ```toggleClass : "active"```<br>
Object - ```toggleClass : {targets: ".my-selector", className: "active"}```


### 📎 실습 파일 살펴보기
- [index.html](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-4.FastScrollEnd/index.html>)
- [css/style.css](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-4.FastScrollEnd/css/style.css>)
- [js/main.js](<https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/blob/main/scrollTrigger-started/02.Advanced%20Trigger/2-4.FastScrollEnd/js/main.js>)