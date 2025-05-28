const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
const more = document.querySelectorAll(".more");
const hide = document.querySelectorAll(".hide");

tabItem.forEach((item, index) => (

  item.addEventListener('click', function () {
    tabItem.forEach((item) => item.classList.remove("on"));
    tabContent.forEach((content) => content.classList.remove("show"));

    tabItem[index].classList.add("on");
    tabContent[index].classList.add("show");

    console.log(index);
    console.log(item.innerText);
  })
))

//필수 표기정보 더보기 클릭 시
// more.addEventListener('click', function () {
//   hide.classList.remove("hide");
//   more.remove();
// })

/*
querySelectorAll을 querySelector로 바꿨더니 첫번째 요소만 작동함
필수 표기정보 더보기 클릭 시 에러 발생!
TypeError: more.addEventListener is not a function
에러 발생 이유: more와 hide가 모두 NodeList이기 때문
  - document.querySelectorAll()은 NodeList를 반환해서 배열처럼 여러 요소를 가져옴
  - .addEventListener는 단일 요소에만 적용이 가능함
  - 아래의 .forEach()문으로 해결 가능

NodeList란?
DOM 노드들의 리스트(List)로, 배열처럼 보이지만 실제 배열은 아님 ex. .box를 가진 div가 여러개 있을 때
*/

more.forEach((btn) => {
  btn.addEventListener('click', function () {
    hide.forEach((hide) => hide.classList.remove("hide"));
    btn.remove();
  });
});
