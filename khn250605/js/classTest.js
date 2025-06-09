// classTest.js

// 자바스크립트의 클래스 알아보기!

// 1. 은행계좌 클래스
//    owner (사용자명), balance (잔액)

// 이서희 잔액은 100000원 있다.
// 강동원 잔액은 10000원 있다.
// 위에 각각 변수를 만들어서 저장하고 출력하는 실습

class account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

const user1 = new account("이서희", 100000);
const user2 = new account("강동원", 10000);
console.log("사용자명:", user1.owner, "잔액:", user1.balance);
console.log("사용자명:", user2.owner, "잔액:", user2.balance);



// 2. 게시판 클래스
// board
// title, author, content

// 아무말대잔치, 아무개, 오늘은 집에 가고싶어요!
// 야근 각!, 서희, 어쩔수 없어 야근이야
// 위에 각각 변수를 만들어서 저장하고 출력하는 실습

class board {
  constructor(title, author, content) {
    this.title = title;
    this.author = author;
    this.content = content;
  }
}
const board1 = new board("아무말대잔치", "아무개", "오늘은 집에 가고싶어요!");
const board2 = new board("야근 각!", "서희", "어쩔수 없어 야근이야!");
console.log("제목:", board1.title, "작성자:", board1.author, "내용:", board1.content);
console.log("제목:", board2.title, "작성자:", board2.author, "내용:", board2.content);
