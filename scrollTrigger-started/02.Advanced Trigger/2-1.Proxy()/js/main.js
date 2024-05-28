// 🙌 스크롤 스무스 효과

const container = document.querySelector("#container");

const scrollbar = Scrollbar.init(container, {
  // damping값이 낮아질수록 더 부드러워짐
  damping: 0.05,
  alwaysShowTracks: true,
});

// 💥 스크롤 스무스 라이브러리
// html의 scroll이 작동하는게 아닌 애니메이션 프레임을 통해 스크롤을 처리하기 때문에 scroll관련 이벤트 요소들은 먹지않음
// 해결책은 해당 라이브러리 내에 있는 메서드 이용.
