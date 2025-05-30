








// 텍스트 위로 등장
$(".btn-show").click(function () {
  $(".show-text").animate({
    bottom: '0px',
    opacity: 1
  }, 300);
});

// 박스 색상 전환(css)
$(".btn-change").click(function () {
  $(".change-box").animate({
    backgroundColor: "#4a65ff"
  }, 300);
});
/* backgroundColor 적용되지 않음!!!
  -> 기본 jQuery는 숫자 기반의 css 속성만 가능함

** backgroundColor가 적용되려면 jQuery-ui 라이브러리가 필요함.
  - htmlt에 아래 cdn 추가
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>

  -> jQuery-ui를 써도 transform, filter, display, position은 불가능
*/


// 리스트 항목 하나씩 등장
let foodList = ["피자", "햄버거", "초밥"];

$(".btn-view").click(function () {
  foodList.forEach((food, index) => {
    // let foodItem = `<p>${food}</p>`;
    // TypeError: foodItem.delay is not a function 에러남
    // delay(), animate()는 제이쿼리 객체만 사용 가능

    let $foodItem = $(`<p>${food}</p>`); // 제이쿼리 변수명에는 $를 붙임 -> 제이쿼리 객체를 구분하기 위해
    $(".view-text").append($foodItem);

    // $foodItem.delay(500).animate({ opacity: 1 }, 500);
    // foodItem이 한번에 나옴

    // delay(index * 500) 0.5초씩 증가함 (0.5초, 1초, 1.5초)
    $foodItem.delay(index * 500).animate({
      opacity: 1
    }, 500, function () {
      console.log("나타남: ", $foodItem.text());
    });
    // 보이지는 않지만 p태그 영역이 미리 생김????
  })
});


// 팝 효과
$(".btn-pop").click(function () {
  $(".pop-box")
    .animate({
      width: '120px',
      height: '120px'
    }, 300)
    .animate({
      width: '100px',
      height: '100px'
    }, 300);
});


// 텍스트 사라짐
$(".btn-hide").click(function () {
  $(".hide-text").animate({
    opacity: 0
  }, 300);
});


// 프로그래스바
// 퍼센트가 가운대로 정렬되야되고 퍼센트를 위에 바가 2초안에 끝나기때문에 2초안에 숫자가 같이 80%까지 변경되야된다.
// setInte~~
$(".btn-fill").click(function () {
  $(".bar").animate({
    width: '80%'
  }, 2000);

  let percent = 0;
  let timer = setInterval(function () {
    percent++;
    console.log(percent);

    if (percent >= 80) {
      clearInterval(timer); //안쓰면 무한 반복
    }

    $(".bar").text(percent + "%");
  }, 25);
});
