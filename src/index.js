const $add = document.querySelector("#add");
const $minus = document.querySelector("#minus");
const $number = document.querySelector("#number");

let number = 0;

$number.innerHTML = number;

const updateNumber = () => {
  $number.innerHTML = number;
};

$add.addEventListener("click", () => {
  number = number + 1;
  updateNumber();
});

$minus.addEventListener("click", () => {
  number = number - 1;
  updateNumber();
});
