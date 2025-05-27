const products = [
  {
    img: "img/img.jpg",
    name: "제스프리 골드 키위 특대과, 3kg(27개입), 1개",
    price: 26500,
    unitPrice: 833,
    reviewScore: "⭐⭐⭐⭐⭐",
    reviewCount: 5819
  },
  {
    img: "img/img1.jpg",
    name: "넉넉소반 12종 직장인을 위한 단백질 점심 냉동 간편 프리미엄 도시락, 2세트, 8.444kg",
    price: 125200,
    unitPrice: 741,
    reviewScore: "⭐⭐⭐⭐⭐",
    reviewCount: 1996
  },
  {
    img: "img/img2.jpg",
    name: "맛통령 베니하루카 꿀고구마, 꿀고구마 (중) 2kg, 1개",
    price: 199500,
    unitPrice: 998,
    reviewScore: "⭐⭐⭐⭐⭐",
    reviewCount: 17108
  },
  {
    img: "img/img3.png",
    name: "해드림프리미엄김치 10kg |천연 스테비아 | 무첨가 (HACCP), 1개",
    price: 24000,
    unitPrice: 240,
    reviewScore: "⭐⭐⭐⭐⭐",
    reviewCount: 6072
  },
  {
    img: "img/img4.jpg",
    name: "프리미엄씨푸드몰 노르웨이 생연어 혈합육제거, 1kg, 1개",
    price: 39980,
    unitPrice: 3998,
    reviewScore: "⭐⭐⭐⭐⭐",
    reviewCount: 2972
  }
];
console.log(products);

const productList = document.getElementById("product-list");

/* for문
  for (초기식; 조건식; 증감식){
    반복 실행될 코드
  }

  1. 초기식
    - i를 0으로 초기화한다.
  2. 조건식
    - ture일 때만 반복문 실행, false가 되면 반복 중단
    - products.length는 배열 안에 들어 있는 요소 개수
  3. 증감식
    - i 값을 1씩 증가
*/
/*toLocaleString()
  숫자.toLocaleString([locale], [options])
*/

for (let i = 0; i < products.length; i++) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
  <img src="${products[i].img}">
  <div class="text-box">
    <h4 class="name">${products[i].name}</h4>
    <h3 class="price">${products[i].price.toLocaleString()}원</h3>
    <p class="unit-price">100g 당 ${products[i].unitPrice}원</p>
    <div class=review-box>
      <span class="review-score">${products[i].reviewScore}</span>
      <span class="review-count">(${products[i].reviewCount.toLocaleString()})</span>
    </div>
  </div>

`
  productList.appendChild(div);
}

