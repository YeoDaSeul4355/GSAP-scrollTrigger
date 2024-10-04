const goToTop = gsap.timeline()
.to('.goToTop img', {y: 0, opacity: 1, ease: 'back(3)'})
.to('.goToTop a', {y: 0, opacity: 1, ease: 'back(3)'}, '-=0.3')

ScrollTrigger.create({
  trigger: '.scroll-content',
  start: '75% center',
  end: 'bottom center',
  animation: goToTop,
  markers: true,
  toggleActions: 'play none none reverse',
  // toggleClass: 'active', // 기본적으로 트리거 되는 대상에게 클래스 붙여줌
  // toggleClass: {
  //   targets: '.goToTop',
  //   className: 'active'
  // } // 특정 대상에게 클래스 붙여줌
  toggleClass: {
    targets: ['.goToTop', '.scroll-content'],
    className: 'active'
  },
  fastScrollEnd: 1500 //해당 옵션은 scrub을 활성화 하면 비활성화됨
})

// 스무스 스크롤 라이브러리 사용
const topButton = document.querySelector('.goToTop');

topButton.addEventListener('click', () => {
  scrollbar.scrollTo(0, 0, 600, {
    callback: () => {
      // alert('done');
    }
  });
})

markers();