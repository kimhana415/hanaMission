// $(".tab-button").click(function () {
//   $(".tab-button").removeClass('on');
//   $(".tab-content").removeClass('show');

//   $(this).addClass('on');
//   $(this).parents().find(".tab-content").addClass('show');
// })
/*
.click() 사용 시 .tab-content 부분이 작동 하지 않음

.click():
페이지 로드 시 지정된 요소에 클릭 이벤트를 바인딩
동적으로 생성된 요소에는 적용되지 않음
이벤트 핸들러를 한 번만 설정할 수 있음

.on('click'):
지정된 요소와 동적으로 생성되는 요소에도 클릭 이벤트를 바인딩할 수 있음
이벤트 위임(event delegation) 기능을 사용하여 부모 요소에 이벤트를 바인딩하고, 하위 요소에서 발생한 이벤트를 처리할 수 있음
이벤트 핸들러를 여러 번 설정할 수 있으며, 필요에 따라 이벤트를 제거할 수도 있음
*/

$('.tab-button').each(function (index) { // each: 자바스크립트 forEach문
  $(this).on('click', function () {
    $('.tab-button').removeClass('on');
    $('.tab-content').removeClass('show');

    $(this).addClass('on');
    $('.tab-content').eq(index).addClass('show'); // .eq() : 몇 번째 요소인지

    console.log(index);
    console.log($(this).text());
  });
});

/*
forEach((btn, index) => )	      >   .each(function(index) {  })
addEventListener('click', fn)	  >   .on('click', fn)
classList.remove()	            >   .removeClass()
classList.add()	                >   .addClass()
innerText	                      >   .text()
*/
