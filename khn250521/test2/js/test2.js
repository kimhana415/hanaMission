// 250521khn-인스타그램
var heartValue = 10;
function heartClick(element){
  element.classList.toggle("heart-red");
  element.classList.toggle("bi-heart-fill");
  element.classList.toggle("bi-heart");

  if(element.classList.contains("bi-heart")){
    heartValue = heartValue - 1;
  } else{
    heartValue = heartValue + 1;
  }
  document.getElementById("like-count").innerText = heartValue + '명';
  console.log("좋아요 개수:", heartValue);
}

function bookmarkClick(element){
  element.classList.toggle("bi-bookmark-fill");
  element.classList.toggle("bi-bookmark");
}