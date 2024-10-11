const theme = {
  primary: "#6067f3",
  secondary: "#e8e2da",
};

const keywords = ['Jeju','Yang-yang','Mokpo','Busan'];

// 테마 체인지 함수
function changeTheme(themeMode = 'light'){
  const tween = gsap.to('body, .nav_container', {
    backgroundColor: themeMode === 'light' ? theme.secondary : theme.primary,
    color: themeMode === 'light' ? theme.primary : theme.secondary,
  })

  return tween;
}

// 헤더 고정 함수
function fixedHeader(){
  ScrollTrigger.create({
    trigger: '.nav_container',
    start: 'top top',
    end: 'max',
    pin: true,
    pinSpacing: false,
  })
}

// hero 함수
function heroAni(){
  gsap.set('.logo', {
    width: '100%',
    yPercent: -90
  })

  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom 20%',
    animation: gsap.to('.logo', {width: '12%', yPercent: 0}),
    scrub: true,
  })
}

// text 함수
function textAni(){
  gsap.utils.toArray('.header_text-wrap').forEach((text, index) => {
    const target = text.querySelector('.header_text-wrap');

    const [x, xEnd] = index % 2 ? [innerWidth, 0] : [-innerWidth, 0]
    
    ScrollTrigger.create({
      trigger: text,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(text, {
        x
      }, {
        x: xEnd
      }),
      scrub: true,
    })
  })
}

// 마스크 함수
function maskAni(){
  const circleTween = gsap.timeline()
  .to('.circle_element', {
    borderRadius: 0,
    width: innerWidth,
    height: innerHeight
  })
  .add(changeTheme(), 0)

  ScrollTrigger.create({
    trigger: '.circle_wrap',
    start: 'top top',
    end: '+=2000',
    animation: circleTween,
    pin: true,
    scrub: true,
  })
}

// 카테고리 함수
function cateAni(){
  const tween = gsap.from('.categories > a', {
    opacity: 0,
    filter: 'blur(3px)',
    stagger: {
      each: 0.1,
      from: 'random',
    }
  })  

  ScrollTrigger.create({
    trigger:'.catories_container',
    start: 'top top',
    end: '+=2000',
    animation: tween,
    pin: true,
    scrub: true,
  })
}

// 갤러리 함수
function gallAni(){
  ScrollTrigger.create({
    trigger: '.text_container',
    start: 'top top',
    endTrigger: '.image_container',
    end: 'bottom bottom',
    animation: gsap.to('.front_image', {yPercent: -20}),
    pin: true,
    pinSpacing: false,
    scrub: true,
    onUpdate: ({progress}) => {
      const ratio = Math.round(progress * 100);
      const span = document.querySelector(".text_container span");
      let index = 0;
      let mode = 'light'


      if(ratio > 0 && ratio < 25){
        index = 0;
        mode = 'light';
      } 
      if(ratio >= 25 && ratio < 50) {
        index = 1;
        mode = 'dark';
      } 
      if(ratio >= 50 && ratio < 75) {
        index = 2;
        mode = 'light';
      } 
      if(ratio >= 75 && ratio <= 100) {
        index = 3;
        mode = 'dark';
      } 


      changeTheme(mode);
      span.textContent = keywords[index];
    }
  })
}

fixedHeader();
heroAni();
textAni();
maskAni();
cateAni();
gallAni();
markers();
