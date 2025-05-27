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
  // &&(AND 연산자) 두 조건이 모두 true일 때
  if (inputValue !== "" && textareaValue !== "") {
    // li 생성
    let liTag = document.createElement('li');

    // 제목 div 생성
    let titleDiv = document.createElement('div');
    titleDiv.innerText = inputValue;  // 인풋 값 추가
    titleDiv.className = "title";

    // 내용 div 생성
    let contentDiv = document.createElement('div');
    contentDiv.innerText = textareaValue;  // 텍스트아리아 값 추가
    contentDiv.className = "content";

    // 삭제 버튼 생성
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "삭제"; // 버튼 값 추가
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
    // ul에 li 태그 추가
    postList.prepend(liTag); //  prepend 첫번째 자식으로 추가됨

    // 입력 초기화
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

  } else {
    alert("모두 입력해 주세요.")
  }
})


/* 함수 사용해서 코드 간결하게 바꾸기 */

// 요소 가져오기
const addBtn = document.getElementById('addBtn');
const postList = document.getElementById('postList');
const titleInput = document.getElementById('title');
const contentTextarea = document.getElementById('content');

// 🧩 입력값 유효성 검사
function isValidInput(title, content) {
  return title.trim() !== '' && content.trim() !== '';
}

// 🧩 게시글 아이템 생성
function createPostItem(title, content) {
  const li = document.createElement('li');

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  titleDiv.innerText = title;

  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  contentDiv.innerText = content;

  const deleteBtn = createDeleteButton(li);

  li.appendChild(titleDiv);
  li.appendChild(contentDiv);
  li.appendChild(deleteBtn);

  return li;
}

// 🧩 삭제 버튼 생성
function createDeleteButton(parentElement) {
  const btn = document.createElement('button');
  btn.innerText = '삭제';
  btn.className = 'delete-btn';
  btn.addEventListener('click', () => {
    parentElement.remove();
  });
  return btn;
}

// 🧩 입력 필드 초기화
function clearInputs() {
  titleInput.value = '';
  contentTextarea.value = '';
}

// 🔁 버튼 클릭 이벤트
addBtn.addEventListener('click', () => {
  const title = titleInput.value;
  const content = contentTextarea.value;

  if (isValidInput(title, content)) {
    const postItem = createPostItem(title, content);
    postList.prepend(postItem);
    clearInputs();
  } else {
    alert('모두 입력해 주세요.');
  }
});

