const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // 向下滾動，顯示下一頁
    currentSlide = (currentSlide + 1) % slides.length;
  } else {
    // 向上滾動，顯示上一頁
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }
  showSlide(currentSlide);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    // 右方向鍵，顯示下一頁
    currentSlide = (currentSlide + 1) % slides.length;
  } else if (event.key === "ArrowLeft") {
    // 左方向鍵，顯示上一頁
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }
  showSlide(currentSlide);
});
