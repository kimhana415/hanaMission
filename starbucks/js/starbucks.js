// 메뉴
$(".gnb__item").on({
  mouseenter: function () {
    $(this).find(".gnb__sub").slideDown(400);
  },
  mouseleave: function () {
    $(this).find(".gnb__sub").slideUp(400);
  }
});

// 메인 비주얼
const fadeInTargets = [
  ".main__visual__slogan",
  ".drink1",
  ".drink2",
  ".drink3",
  ".btn__slogan"
];

fadeInTargets.forEach((target, i) => {
  const el = document.querySelector(target);
  if (el) {
    setTimeout(() => {
      el.style.opacity = 1;
    }, i * 500);
  }
});
