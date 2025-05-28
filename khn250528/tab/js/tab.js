const tabBtnList = document.querySelectorAll(".tab-button"); // 탭 버튼 가져옴
const tabContentList = document.querySelectorAll(".tab-content");

// for 문 + forEach 문
// for (let tab = 0; tab < tabBtnList.length; tab++) {
//   tabBtnList[tab].addEventListener('click', function () {
//     tabBtnList.forEach(tabBtn => {
//       tabBtn.classList.remove("on");
//     });
//     tabContentList.forEach(tabContent => {
//       tabContent.classList.remove("show");
//     });

//     tabBtnList[tab].classList.add("on");
//     tabContentList[tab].classList.add("show");

//     console.log("선택된 탭:", tabBtnList[tab].innerText);
//   }
//   )
// };

// forEach문
// tabBtnList.forEach((tabBtn, index) => {
//   tabBtn.addEventListener('click', function () {

//     tabBtnList.forEach((tab => {
//       tab.classList.remove("on");
//     }));

//     tabContentList.forEach((content => {
//       content.classList.remove("show")
//     }));

//     tabBtnList[index].classList.add("on");
//     tabContentList[index].classList.add("show");

//     console.log("선택된 탭:", tabBtn.innerText);
//     console.log(index);
//   });
// });



tabBtnList.forEach((btn, index) => (
  btn.addEventListener('click', function () {
    tabBtnList.forEach(btn => (btn.classList.remove('on')));
    tabContentList.forEach(content => (content.classList.remove('show')));

    tabBtnList[index].classList.add('on');
    tabContentList[index].classList.add('show');

    console.log(index);
    console.log(btn.innerText);
  })
));
