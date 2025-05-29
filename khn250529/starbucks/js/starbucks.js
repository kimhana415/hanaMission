$(".gnb__item").on({
  mouseenter: function () {
    $(this).find(".gnb__sub").slideDown(400);
  },
  mouseleave: function () {
    $(this).find(".gnb__sub").slideUp(400);
  }
})
