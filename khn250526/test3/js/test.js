// 추가하기 버튼 찾기
let addBtn = document.getElementById('addBtn');

// 추가하기 버튼 클릭 시
addBtn.addEventListener('click', function () {
  console.log("버튼 클릭")

  let inputTag = document.getElementById("title");
  let inputValue = inputTag.value;

  if (inputValue !== "") {
    // li 생성
    let liTag = document.createElement('li');

    // 타이틀 div 생성
    let titleDiv = document.createElement('div');
    titleDiv.innerText = inputValue;  // 인풋 값 추가
    titleDiv.className = "title";

    // 삭제 버튼 생성
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "delete-btn";

    // 삭제 버튼 클릭 시 li 삭제
    deleteBtn.addEventListener('click', function () {
      liTag.remove();
    })

    // li에 타이틀, 버튼 추가
    liTag.appendChild(titleDiv);
    liTag.appendChild(deleteBtn);

    // ul 가져오기
    let todoList = document.getElementById('todoList');
    // ul에 li 추가
    todoList.prepend(liTag);  //  prepend 첫번째 자식으로 추가됨


    // 입력 초기화
    document.getElementById('title').value = '';
  } else {
    alert("할 일을 입력하세요")
  }
})



/* 함수 사용해서 가독성 좋게 변경 */
// 요소 가져오기
const addBtn2 = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const inputTag = document.getElementById('title');

// 🧩 li 요소 생성 함수
function createTodoItem(text) {
  const li = document.createElement('li');

  const titleDiv = document.createElement('div');
  titleDiv.innerText = text;
  titleDiv.className = 'title';

  const deleteBtn = createDeleteButton(li);

  li.appendChild(titleDiv);
  li.appendChild(deleteBtn);

  return li;
}

// 🧩 삭제 버튼 생성 함수
function createDeleteButton(parent) {
  const btn = document.createElement('button');
  btn.innerText = '삭제';
  btn.className = 'delete-btn';
  btn.addEventListener('click', () => {
    parent.remove();
  });
  return btn;
}

// 🧩 입력값 유효성 검사 함수
function isValidInput(value) {
  return value.trim() !== '';
}

// 🧩 입력값 초기화 함수
function clearInput() {
  inputTag.value = '';
}

// 🔁 버튼 클릭 이벤트 핸들러
addBtn2.addEventListener('click', function () {
  const value = inputTag.value;

  if (isValidInput(value)) {
    const newTodo = createTodoItem(value);
    todoList.prepend(newTodo);
    clearInput();
  } else {
    alert('할 일을 입력하세요');
  }
});
