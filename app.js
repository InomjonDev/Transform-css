const convertWrapper = document.querySelector(".wrapper__body");
const convertHead = document.querySelector(".wrapper__body-head");
const itemFirst = document.querySelector(".wrapper__body-body-item-1");
const itemSecond = document.querySelector(".wrapper__body-body-item-2");
const itemThird = document.querySelector(".wrapper__body-body-item-3");

let open = false;

convertWrapper.addEventListener("click", () => {
  open = !open;
  if (open == true) {
    convertHead.classList.add("open");
    itemFirst.classList.add("show");
    itemSecond.classList.add("show");
    itemThird.classList.add("show");
  } else {
    convertHead.classList.remove("open");
    itemFirst.classList.remove("show");
    itemSecond.classList.remove("show");
    itemThird.classList.remove("show");
  }
});
