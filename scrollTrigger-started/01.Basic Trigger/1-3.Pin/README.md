# 📌 Pin
Pin 효과는 요소를 스크롤에 고정하여 해당 요소가 페이지에서 움직이지 않고 고정되도록 만드는 기능이다.

## 👀 Pin의 특징

- 고정 위치 설정: Pin 효과를 사용하면 페이지의 스크롤에 따라 요소를 화면의 특정 위치에 고정시킬 수 있다.(보통 헤더, 사이드바 또는 기타 중요한 내용이 페이지의 상단이나 측면 고정에 쓰임.)
- 트리거 포인트 설정: Pin 효과를 트리거하는 스크롤 위치를 설정할 수 있다. 이를 통해 요소가 페이지의 특정 부분에서 고정되도록 할 수 있다.

## 😁 Pin 사용법
```
ScrollTrigger.create({
  trigger: "#GSAP_PIN",
  start: "top top", 
  end: "bottom bottom",
  pin: "true",
  pinType: "fixed",
  pinSpacing: false,
});

```

## 😯 Pin 부가 옵션 

- trigger: Pin을 트리거할 요소의 선택자를 지정한다. (부모 요소에게 pin 효과를 거는 것이 좋다.)
- start: Pin이 시작될 때 요소의 위치를 설정한다.
- end: Pin이 끝날 때 요소의 위치를 설정한다.
- pinSpacing: 기본적으로 Pin 효과는 요소를 고정한 후 빈 공간을 생성한다. pinSpacing: false로 설정하면 이 공간을 없앨 수 있다.
- pinType: 기본적으로 Pin 효과는 요소를 고정시키고 스크롤을 감지한다. "transform"을 사용하여 transform 속성을 사용하여 요소를 이동시킬 수도 있다.(기본 값: fixed)
- markers: 디버깅 목적으로 Pin 효과의 동작을 시각적으로 보여주는 마커를 추가할지 여부를 설정한다.

### 😁 start와 end가 갖는 인자값
![Frame 463](https://github.com/YeoDaSeul4355/GSAP-scrollTrigger/assets/125419623/b298cfd4-2335-4044-af0b-a742a57af6b3)



- 첫 번째 인자: Pin이 시작하거나 끝나는 지점을 정의합니다. 이는 트리거 요소의 상대적 위치를 나타냅니다.
- 두 번째 인자: 시작 또는 끝 지점에서 고정 요소의 위치를 조정합니다. 이는 고정 요소의 상대적 위치를 나타냅니다.

### 🤩 PinSpacer
pinSpacer는 ScrollTrigger에서 사용되는 옵션 중 하나로, 고정된 요소와 그 다음 요소 간의 공간을 조절하는 데 사용된다.<br />

일반적으로 Pin 효과를 사용하면 고정된 요소가 페이지에서 제거되고 다음 요소가 해당 요소의 공간을 채우게 된다. <br />
그러나 때로는 고정된 요소를 고정된 상태로 유지하면서 다음 요소와의 간격을 유지해야 할 때가 있음

🤨 pinSpacing 주의사항
- display:flex 또는 position:absolute가 있는 부모에 무언가를 고정하면 추가 패딩이 다른 요소를 아래/오른쪽으로 밀어내지 않으므로 수동으로 간격 조정 필요<br />
- 컨테이너가 display:flex 인 경우 패딩이 해당 컨텍스트에 따라 다르게 작동하기 때문에 이 경우는 기본적으로 pinSpacing:false 가 적용
