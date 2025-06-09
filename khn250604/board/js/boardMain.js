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

const postBtn = document.getElementById('btnPost'); // 글 올리기
const deleteBtn = document.getElementById('btnDelete'); // 글 삭제
const boardTitle = document.getElementById('title'); // 타이틀
const boardContent = document.getElementById('content'); // 컨텐츠
const postList = document.getElementById('postList'); // 게시판 리스트
const noPosts = document.getElementById('noPosts'); // 등록된 글 없을 때

let boardList = [
  {
    id: "id",
    title: '',
    content: '',
    createDate: new Date()
  }
];

// 글 올리기 함수
function boardPost() {

}

// 글 올리기 클릭했을 때
postBtn.addEventListener('click', function () {
  if (boardList.values) {
    boardPost(boardList.values);
  };
  console.log("글 올리기");
});

// 글 삭제 클릭했을 떄
deleteBtn.addEventListener('click', function () {
  if (boardList.length === 0) {
    alert("삭제할 글이 없습니다.");
    return;
  };
  console.log("글 삭제");
});
