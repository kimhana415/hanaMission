// 파일명: tree.js

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

function insert() {
  const value = document.getElementById('inputValue').value;
  console.log(value);

  if (value === '') return alert("값을 입력하세요!");


  if (root === null) {
    root = new Node(value);
    console.log(root);

    const tree = document.getElementById('tree');

    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.innerText = root.value;

    tree.appendChild(nodeEl);

    return alert('루트를 추가했습니다!');
  }


  const tree = document.getElementById('tree');

  const childrenBox = document.createElement('div');
  childrenBox.className = 'children';


  // 루트보다 작으면 왼쪽 자식을 추가한다.
  if (value < root.value) {
    root.left = new Node(value);
    console.log("왼쪽");

    // const tree = document.getElementById('tree');

    // const childrenBox = document.createElement('div');
    // childrenBox.className = 'children';

    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.innerText = value;

    childrenBox.appendChild(nodeEl);
    tree.appendChild(childrenBox);
  } else {
    root.right = new Node(value);
    console.log("오른쪽");

    // const tree = document.getElementById('tree');

    // const childrenBox = document.createElement('div');
    // childrenBox.className = 'children';

    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.innerText = value;

    childrenBox.appendChild(nodeEl);
    tree.appendChild(childrenBox);
  }

  // 루트보다 크면 오른쪽으로 객체를 생성해서 html 붙이기

}
