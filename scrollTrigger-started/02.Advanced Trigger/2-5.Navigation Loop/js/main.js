const navColor = ["#ebdec1", "#e9aab1", "#92e0d3", "#52becb", "#f17683"];

const nav = document.querySelector('.nav');

// ScrollTrigger.create({
//   trigger: '.section02',
//   // start와 end값을 함수를 통해 유동적으로 설정할 수 있다.
//   start: () => `top ${nav.offsetHeight}px`, 
//   end: () => `bottom ${nav.offsetHeight}px`,
//   animation: gsap.to(nav, {backgroundColor: navColor[1]}),
//   markers:true,
//   toggleActions: 'restart none none reverse',
// })

// const section = gsap.utils.toArray('.section').map((section) => section.getBoundingClientRect().top)

// 스크롤 할 때마다 섹션에 맞게끔 헤더 색 변경
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

// 네비게이션 클릭해서 해당 섹션으로 이동
gsap.utils.toArray('.nav li').forEach((li, index) => {
  li.addEventListener('click', () => {
    let sectionTop = (ScrollTrigger.getAll()[index].start + nav.offsetHeight);
    scrollbar.scrollTo(0, sectionTop, 600);
  })
})

markers();
