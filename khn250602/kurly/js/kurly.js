// kurly.js
const timer = document.getElementById('timer');

const intervalId = setInterval(() => {
  const now = new Date(); //현재 시각
  const endDate = new Date('2025-06-03T23:59:59') // 종료 시각
  const diff = Math.floor((endDate - now) / 1000); // 남은 초

  // 0초 일때 반복 멈춤
  if (diff <= 0) {
    timer.textContent = '00 : 00 : 00';
    clearInterval(intervalId);
    return;
  }

  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  const timeHour = String(hours).padStart(2, "0");
  const timeMin = String(minutes).padStart(2, "0");
  const timeSec = String(seconds).padStart(2, "0");
  // Math.floor() 정수만 반환

  timer.textContent = `${timeHour} : ${timeMin} : ${timeSec}`;
}, 1000);

// 시간 두자릿수
// String(timeMin).padStart(2,"0");
// 문자열 포맷팅
// padStart(길이,부족한 자리수를 무엇으로 재울지 지정)


/*
.title {
  white-space: nowrap;        /* 줄 바꿈 없음
  overflow: hidden;           /* 넘치는 텍스트 숨기기
  text-overflow: ellipsis;    /* 말줄임(...) 표시
}

리액트에서 기존 데이터를 복사하는 경우!
spred
  - 기존 배열의 내용을 모두 복사해라!

[...배열명, 새로운, 새로운2]
배열을 복사할 때 생기는 문제점들이 있다. 그래서 그걸 해결하기 위해서 나온 문법이다!

깊은 복사, 얇은 복사 알고리즘 할 때 추가적으로 설명을 드리겠습니다~
*/


const products = [
  {
    img: "img1.jpg",
    num: 1,
    title: "[다우니] 섬유유연제 14종 (택1)",
    percent: 31,
    price: 6490,
  },
  {
    img: "img2.jpg",
    num: 2,
    title: "[네이쳐리빙] 모던데일 뽀송 메모리폼 발매트 욕실/주방 6종 (택1)",
    percent: 50,
    price: 10900,
  },
  {
    img: "img3.png",
    num: 3,
    title: "[자일렉] 오븐형 에어프라이어 18L (단품)",
    percent: 50,
    price: 10900,
  },
  {
    img: "img4.jpg",
    num: 4,
    title: "[아카라] 스마트 도어락 K100 푸시풀 허브/무선 미니 스위치 세트 (설치포함)",
    percent: 30,
    price: 442400,
  },
  {
    img: "img5.jpg",
    num: 5,
    title: "[아스토니쉬] 곰팡이제거제 외 BEST 클리너 2개 set 7종 (택1)",
    percent: 53,
    price: 11900,
  }
];

const productItems = document.getElementById("product-items");
products.forEach(product => {
  const li = document.createElement("li");
  li.className = "product__item"
  li.innerHTML = `
  <div class="img__box">
    <img src="img/${product.img}">
    <div class="badge">반짝특가</div>
  </div>
  <div class="info__box">
    <div class="text__box">
      <div class="item__num">${product.num}</div>

      <div class="item__info">
        <div class="item__title">${product.title}</div>

        <div class="price__box">
          <div class="percent">${product.percent}%</div>
          <div class="price">${product.price.toLocaleString()}원~</div>
        </div>
      </div>
    </div>

    <button class="btn__put">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.53516 2.70001H3.93316L5.76816 10.609H13.6482L15.2992 4.35901H4.86916M12.8582 14.933C13.0098 14.9375 13.1609 14.9115 13.3024 14.8566C13.4438 14.8017 13.5728 14.7189 13.6817 14.6132C13.7906 14.5075 13.8771 14.381 13.9363 14.2412C13.9954 14.1015 14.0258 13.9513 14.0258 13.7995C14.0258 13.6478 13.9954 13.4975 13.9363 13.3578C13.8771 13.218 13.7906 13.0915 13.6817 12.9858C13.5728 12.8801 13.4438 12.7974 13.3024 12.7424C13.1609 12.6875 13.0098 12.6615 12.8582 12.666C12.5634 12.6748 12.2836 12.798 12.0782 13.0096C11.8727 13.2213 11.7578 13.5046 11.7578 13.7995C11.7578 14.0944 11.8727 14.3778 12.0782 14.5894C12.2836 14.801 12.5634 14.9243 12.8582 14.933ZM6.49316 14.933C6.64484 14.9375 6.79589 14.9115 6.93735 14.8566C7.07881 14.8017 7.20781 14.7189 7.31669 14.6132C7.42558 14.5075 7.51214 14.381 7.57126 14.2412C7.63037 14.1015 7.66083 13.9513 7.66083 13.7995C7.66083 13.6478 7.63037 13.4975 7.57126 13.3578C7.51214 13.218 7.42558 13.0915 7.31669 12.9858C7.20781 12.8801 7.07881 12.7974 6.93735 12.7424C6.79589 12.6875 6.64484 12.6615 6.49316 12.666C6.19836 12.6748 5.91858 12.798 5.71315 13.0096C5.50773 13.2213 5.39283 13.5046 5.39283 13.7995C5.39283 14.0944 5.50773 14.3778 5.71315 14.5894C5.91858 14.801 6.19836 14.9243 6.49316 14.933Z"
          stroke="#333333" stroke-linecap="square" stroke-linejoin="round"></path>
      </svg>
      담기
    </button>
  </div>
`
  productItems.appendChild(li)
});
