// 🙌 스크롤 스무스 효과
const container = document.querySelector("#container");

const scrollbar = Scrollbar.init(container, {
  // damping값이 낮아질수록 더 부드러워짐
  damping: 0.05,
});
