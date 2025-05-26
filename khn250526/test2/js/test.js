// 파일명: test.js

// 버튼 찾기
let btn = document.getElementById('addBtn');

// 버튼 클릭 시
btn.addEventListener('click', function () {
  console.log('버튼 클릭!');

  // 인풋 요소와 값 가져오기
  let inputTag = document.getElementsByTagName('input');
  let inputValue = inputTag[0].value;

  // 텍스트아리아 요소와 값 가져오기
  let textareaTag = document.getElementsByTagName('textarea');
  let textareaValue = textareaTag[0].value;


  // 인풋과 텍스트아리아가 빈값이 아니면
  if (inputValue !== "" && textareaValue !== "") {
    // li 생성
    let liTag = document.createElement('li');

    // 제목 div 생성
    let titleDiv = document.createElement('div');
    titleDiv.innerText = inputValue;  // 인풋 값 추가
    titleDiv.className = "title";

    // 내용 div 생성
    let contentDiv = document.createElement('div');
    contentDiv.innerText = textareaValue;  // 인풋 값 추가
    contentDiv.className = "content";

    // 삭제 버튼 생성
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "delete-btn";

    // 삭제 버튼 클릭 시 li 삭제
    deleteBtn.addEventListener('click', function () {
      liTag.remove();
    })

    // li에 하위 요소 추가
    liTag.appendChild(titleDiv);
    liTag.appendChild(contentDiv);
    liTag.appendChild(deleteBtn);

    // ul 찾기
    let postList = document.getElementById('postList');
    postList.appendChild(liTag); // ul에 li 태그 추가

    // 입력 초기화
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

  } else {
    alert("제목과 내용 모두 입력해 주세요.")
  }
})
