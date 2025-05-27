
// 인풋 클릭시 버튼 박스 보이기
const inputClick = document.getElementById("input-value");
const btnBox = document.getElementsByClassName("btn-box")[0];

inputClick.addEventListener('click', function () {
  btnBox.style.display = "flex";
})

// 취소 버튼 클릭 시 버튼 박스 숨기기
const btnCancel = document.getElementById('btn-cancel');

btnCancel.addEventListener('click', function () {
  btnBox.style.display = "none";
  inputClick.value = "";
})

// 댓글 버튼 클릭 시
const btnSave = document.getElementById('btn-save');

btnSave.addEventListener('click', function () {
  const input = document.getElementById("input-value");
  if (input.value !== "") {

    const li = document.createElement("li");
    li.className = "comment-item";
    li.innerHTML = `
      <div class="img-box">
        <img src="img/bambi.png">
      </div>
      <div>
        <div>
          <span>@id</span>
          <span>5일 전</span>
        </div>
        <p>${input.value}</p>
      </div>
    `;

    const commentList = document.getElementById("comment-list");
    commentList.prepend(li);

    input.value = "";
  }
})
