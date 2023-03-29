//click plus icon-> show question text
// const plusBtns = document.querySelectorAll(".plus-icon");
// const questionText = document.querySelectorAll(".question-text");
// console.log(questionText);
// console.log(plusBtns);
// plusBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {

//     });
//   });

//   traversing the dom
const btns = document.querySelectorAll(".question-btn");
// console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    // console.log(question);
    console.log(e.currentTarget);
    console.log(e.currentTarget.parentElement.parentElement);

    question.classList.toggle("show-text");
  });
});
