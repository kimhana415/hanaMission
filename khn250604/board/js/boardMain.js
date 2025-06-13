// 파일명: boardMain.js

/*
스택을 이용해서 게시판을 구현
추가는 항상 위에 push()
삭제는 항상 위에 pop()

게시판에 들어갈 내용은 id ,title, content, timestamp(시간)

1.스택을 관리할 배열 선언

2. HTML요소 찾기

3. 글 올리기 함수를 만든다.
  버튼을 클릭하면 input에 있는 제목과 내용을 가지고 오기!
  Date() 객체 이용하기
  id는 글을 추가할 때 마다 1씩 증가해서 title과 나머지 값들하고 같이 객체형
  태로 저장하기!

4. 글 올리고 나서 html화면에 그리기!
*/
const boardTitle = document.getElementById('title'); // 타이틀
const boardContent = document.getElementById('content'); // 컨텐츠
const postBtn = document.getElementById('btnPost'); // 글 올리기
const deleteBtn = document.getElementById('btnDelete'); // 글 삭제
const postList = document.getElementById('postList'); // 게시판 리스트
const noPosts = document.getElementById('noPosts'); // 등록된 글 없을 때

let boardList = [];
let counterId = 1;


// 글 올리기 함수
function boardPost() {
  const title = boardTitle.value;
  const content = boardContent.value;

  // 이 코드 안쓰니까 날짜만 출력됨
  if (!title || !content) {
    alert('모두 입력해주세요.')
    return;
  }

  const newPost = {
    id: counterId++,
    title: title,
    content: content,
    createDate: new Date()
  };

  boardList.push(newPost); // 스택에 추가
  renderPosts(); // 화면에 다시 그리기

  boardTitle.value = '';
  boardContent.value = '';
}


// 글 올리기 클릭했을 때
postBtn.addEventListener('click', function () {
  console.log("글 올리기");
  boardPost();
});


// 글 삭제 클릭했을 떄
deleteBtn.addEventListener('click', function () {
  console.log("글 삭제");
  if (boardList.length === 0) {
    alert("삭제할 글이 없습니다.");
    return;
  }

  const removed = boardList.pop(); // 원본 배열에서 마지막 글 삭제
  renderPosts(); // 삭제한 글 빼고 다시 그리기

  alert(`가장 최근 글을 삭제했습니다.\n제목:${removed.title}`);
});

// 위에서 추가한 내용을 html에 스택 쌓는 명령을 구현하는 함수
function renderPosts() {
  postList.innerHTML = '';  // 안썼더니 글올리기 클릭 할때마다 중복으로 생김

  if (boardList.length === 0) {
    noPosts.style.display = "block";
    return;
  }

  noPosts.style.display = "none";

  [...boardList].reverse().forEach((post) => {
    const postItem = document.createElement('div');

    postItem.className = 'post-item';
    postItem.innerHTML = `
    <h5>${post.title}</h5>
    <div>${post.content}</div>
    <div>${post.createDate.toLocaleString()}</div>
  `;

    postList.appendChild(postItem);
  })

}
