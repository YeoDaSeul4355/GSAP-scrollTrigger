// 🖐️ Pin
// ScrollTrigger가 활성화되어 있는 동안 고정되어야 하는 요소
// 나머지 콘텐츠가 그 아래에서 계속 스크롤되는 동안 시작 위치에 “고정" 되는것 처럼 보이도록 설정

// pinType
// pinType은 요소를 고정(pinned)할 때 사용되는 방법을 지정. 기본값은 fixed임.
// 1. fixed: 스크롤 컨테이너의 스크롤 위치에 상관없이 항상 화면에 고정. 스크롤 컨테이너의 스크롤 위치에 영향을 받지 않음.
// 2. transform: 스크롤 컨테이너 내에서 요소를 이동시키는 대신 요소의 transform 속성을 사용하여 위치를 조정.
// 3. soft: 일반적인 고정 방식과 유사하지만 약간의 보정을 통해 스크롤 속도와 요소의 이동 속도를 조정하여 부드러운 스크롤을 제공

// pinSpacing
// 요소의 상단 또는 하단에 추가 여백을 지정하는 데 사용
// 기본적으로 고정된 요소가 고정 해제될 때 다음 콘텐츠가 완벽하게 따라갈 수 있도록 다른 요소를 아래로 밀어내기 위해 아래쪽 (또는 오른쪽 horizontal:true)에 패딩이 추가. 그렇지 않으면 고정된 요소 아래로 스크롤이 되어 컨텐츠가 겹쳐질 수 있음
// 패딩 대신 마진을 사용할 경우 pinSpacing:"margin" 으로 문자열을 입력하면 마진값이 적용

// pinSpacing 주의사항
// display:flex 또는 position:absolute가 있는 부모에 무언가를 고정하면 추가 패딩이 다른 요소를 아래/오른쪽으로 밀어내지 않으므로 수동으로 간격 조정 필요
// 컨테이너가 display:flex 인 경우 패딩이 해당 컨텍스트에 따라 다르게 작동하기 때문에 이 경우는 기본적으로 pinSpacing:false 가 적용

const split = new SplitText("h3", { type: "chars" });

const tl = gsap
  .timeline()
  .from(".tiger", { duration: 1, scale: 0, ease: "back(3)" })
  .from(split.chars, {
    duration: 4,
    y: 60,
    opacity: 0,
    ease: "back(3)",
    stagger: 0.1,
  });

ScrollTrigger.create({
  trigger: ".banner",
  start: "top center",
  end: "200% center",
  markers: false,
  pin: true,
  animation: tl,
  scrub: 1,
});

ScrollTrigger.create({
  trigger: ".section03",
  start: "top",
  end: "+=2000",
  markers: true,
  pin: true,
  animation: gsap.to(".section03 h2", { rotation: 360 }),
  scrub: 1,
});
