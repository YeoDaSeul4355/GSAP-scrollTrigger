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

markers();
