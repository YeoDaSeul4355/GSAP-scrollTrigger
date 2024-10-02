
const h2 = document.querySelector('.section02 h2');

gsap.to(h2, {
  x: 200,
  scrollTrigger: {
    trigger: '.section02',
    start: () => {
      return '20% center';
    },
    end: '80% center',
    markers: true,
    scrub: true,
    // 특정 스크롤 위치에 도달했을 때 발생
    onEnter: () => {
      h2.textContent = 'Enter';
    },
    // 스크롤이 특정 위치를 지나가서 떠날 때 발생
    onLeave: () => {
      h2.textContent = 'Leave';
    },
    // 스크롤을 되돌려서 특정 위치에 다시 진입할 때 발생
    onEnterBack: () => {
      h2.textContent = 'EnterBack';
    },
    // 스크롤을 되돌려 특정 위치를 벗어날 때 발생
    onLeaveBack: () => {
      h2.textContent = 'LeaveBack';
    },
    // 스크롤 방향에 따라 다른 동작을 설정
    onToggle: ({direction}) => {
      if(direction === 1) {
        h2.style.color = 'red';
      } else {
        h2.style.color = 'blue';
      }
    },
    // 스크롤 트리거가 새로 설정되거나 초기화될 때 실행
    onRefresh: () => {
      // console.log('refresh');
    },
    // 스크롤 진행 상황에 따라 주기적으로 발생하는 동작
    onUpdate: ({progress}) => {
      let percentage = Math.round(progress * 100);
      
      h2.textContent = `${percentage}%`;

      if(percentage >= 50) {
        gsap.set('.section02', {backgroundColor: 'orange'});
      } else {
        gsap.set('.section02', {backgroundColor: 'hotpink'});
      }
    }
  }
})

markers();