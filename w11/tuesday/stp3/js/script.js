let aCard = document.querySelector(".card");
console.log(aCard);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);

// 첫번째 패턴 for 구문 사용.
// for (let idx = 0; idx < cards.length; idx++) {
//   cards[idx].onclick = (e) => {
//     e.currentTarget.classList.toggle(
//       "card-selected"
//     );
//   };
// }

// 두번쨰 forEach 구문 사용.
cards.forEach((eachCard) => {
  eachCard.onclick = function (e) {
    e.currentTarget.classList.toggle(
      "card-selected"
    );
  };
});

// e는 다양한 이름으로 해도됨

// 숫자는 0부터

// let elem = document.getElementById("card1");
// elem.onclick = () => {
//   elem.classList.toggle("card-selected");
// };
// elem.onclick = function () {}
// 간지나는
