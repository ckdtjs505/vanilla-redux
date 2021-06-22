import { createStore } from "redux";

const $add = document.querySelector("#add");
const $minus = document.querySelector("#minus");
const $number = document.querySelector("#number");

const ADD = "ADD";
const MINUS = "MINUS";

const numberModify = (number = 0, action) => {
  console.log(action);
  switch (action.type) {
    case ADD:
      return number + 1;
    case MINUS:
      return number - 1;
    default:
      return number;
  }
};

const numberStore = createStore(numberModify);

numberStore.subscribe(() => {
  $number.innerHTML = numberStore.getState();
});

$add.addEventListener("click", () => {
  numberStore.dispatch({ type: ADD });
});

$minus.addEventListener("click", () => {
  numberStore.dispatch({ type: MINUS });
});
