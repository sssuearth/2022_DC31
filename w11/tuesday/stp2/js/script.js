let aCard = document.querySelector(".card");
// 하나의 카드, 변수의 이름과 의미을 알아볼 수 있게 / .card : css에서 쓰던 방식
console.log(aCard);
aCard.onclick = (e) => {
  // e? : ㄷ=event의 약자, a나 b라고 넣어도 됨 > 자동으로 지금 이벤트가 무엇인지 설명해줌
  console.log("target", e.target);
  // 무릎을 클릭할게요~
  console.log("currentTarget", e.currentTarget);
  e.currentTarget.classList.toggle(
    "card-selected"
  );
};

// let elem = document.getElementById("card1");
// // 이름처럼 아이디가 일치하는 녀석을 가져오게
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };

// elem.onclick = () => {} //아래 코드와 같음
// elem.onclick = function () {} // 위코드와 같음
