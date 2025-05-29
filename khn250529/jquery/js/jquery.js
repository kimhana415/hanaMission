// jquery.js
// 1.  이미지 숨기기/보이기
$('.fade-btn').on('click', function () {
  $('.fade-img').fadeOut(1000).fadeIn(1000);
})

// 2. 마우스가 버튼에 올라가면 텍스트 글씨 쓰기
$('.btn').on({
  mouseenter: function () {
    $('.text').append('<p>텍스트<p/>');
  },
  click: function () {
    $('.btn').css('background', 'pink');
  }
});

// 3. 슬라이드 접었다 폈다.
$('.slide-btn').on('click', function () {
  $('.slide-img').slideUp(1000).slideDown(1000);
})


// 4. 버튼 4개 만들어서 배경색 바꾸기!
$('.bg-btn').on('click', function () {
  $('.bg-btn').eq(0).css('background', 'yellow');
  $('.bg-btn').eq(1).css('background', 'red');
  $('.bg-btn').eq(2).css('background', 'blue');
  $('.bg-btn').eq(3).css('background', 'green');
})


// 5. 선택(디스코드 동영상 확인하기!)
$('.login').on('click', function () {
  $('.modal').fadeIn(1000);
})
$('.cancel-btn').on('click', function () {
  $('.modal').fadeOut(1000);
})
