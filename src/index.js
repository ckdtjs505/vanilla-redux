import { createStore } from "redux";

const $add = document.querySelector("#add");
const $minus = document.querySelector("#minus");
const $number = document.querySelector("#number");

const numberModify = (number = 0, action) => {
  console.log(action);
  if (action.type === "ADD") {
    return number + 1;
  } else if (action.type === "MINUS") {
    return number - 1;
  }
  return number;
};

const numberStore = createStore(numberModify);

numberStore.subscribe(() => {
  $number.innerHTML = numberStore.getState();
});

$add.addEventListener("click", () => {
  numberStore.dispatch({ type: "ADD" });
});

$minus.addEventListener("click", () => {
  numberStore.dispatch({ type: "MINUS" });
});
