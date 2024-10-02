const tl = gsap.timeline({
  defaults: {
    duration: 3,
    ease: 'power3.inOut',
  },
  // onComplete: () => {
  //   console.log('끝!');
  // }
})

.from('.image_container > div', {
  x: innerWidth,
  stagger: {
    amount: 0.5
  },
})
.to('.image_container > div', {
  y: innerHeight *  0.2,
  stagger: {
    amount: 0.5,
    from: 2
  },
}, '-=1.5')
.from('.text_container .elem', {
  y: 50,
  opacity: 0,
  stagger: {
    each: 0.2,
    ease: 'power3.inOut'
  },
  duration: 1
}, '-=2')

// 애니메이션이 끝나고 스크롤 풀기  
tl.eventCallback('onComplete', () => {
  gsap.set('#no-scroll', {display: 'none'});
})

ScrollTrigger.create({
  trigger: '.section01',
  start: 'top top',
  end: 'bottom top',
  animation: gsap.to('.image_container', {x: -innerWidth * 0.5}),
  scrub: true
})


markers();