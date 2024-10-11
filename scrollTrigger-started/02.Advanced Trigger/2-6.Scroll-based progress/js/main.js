const progress = document.querySelector('.progress');

// 프로그래스 바 애니메이션
ScrollTrigger.create({
  trigger: '.progressHolder',
  start: 'top ' + (document.querySelector('.section01').offsetHeight - 150),
  end: 'bottom bottom',
  endTrigger: '.section03',
  pin: true,
  animation: gsap.to(progress, {
    scaleX: 1,
    ease: 'none',
  }),
  // 한 번만 실행하게끔
  onUpdate: ({progress}) => {
    document.querySelector('.percent span').textContent = Math.round(progress * 100);
  },
  scrub: true,
  // markers: true,
  id: 'pro'
})

// circle 프로그래스
const circle = document.querySelector('.circleContainer circle');
const circleLength = circle.getTotalLength() + 1;

// rect 프로그래스 
const rect = document.querySelector('.rectContainer rect');
 const rectLength = rect.getTotalLength() + 1

gsap.set(circle, {
  strokeDashoffset: circleLength,
  strokeDasharray: circleLength,
});

gsap.set(rect, {
  strokeDashoffset: rectLength,
  strokeDasharray: rectLength,
});

// gsap.to(circle, {
//   strokeDashoffset: 0,
//   duration: 2
// });

// ScrollTrigger.create({
//   trigger: '.scroll-content',
//   start: 'top top',
//   end: 'bottom bottom',
//   animation: gsap.to(circle, {strokeDashoffset: 0, ease: 'none'}),
//   markers: true,
//   scrub: true,
// })

const progressSVG = gsap.timeline({
  defaults: {
    strokeDashoffset: 0, ease: 'none'
  }
})
.to(circle, {})
.to(rect, {}, 0)

ScrollTrigger.create({
  trigger: '.scroll-content',
  start: 'top top',
  end: 'bottom bottom',
  animation: progressSVG,
  markers: true,
  scrub: true,
})

// GreenSock(GSAP 유료 버전)의 drawSVG를 활용할 수 있다.
// const progressSVG = gsap.timeline({
//   defaults: {
//     ease: 'none'
//   }
// })
// .from(circle, {drawSVG: 0})
// .from(rect, {drawSVG: 0}, 0)

// ScrollTrigger.create({
//   trigger: '.scroll-content',
//   start: 'top top',
//   end: 'bottom bottom',
//   animation: progressSVG,
//   markers: true,
//   scrub: true,
// })





markers()


