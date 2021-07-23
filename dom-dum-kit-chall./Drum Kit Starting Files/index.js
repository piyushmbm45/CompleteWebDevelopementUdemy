// // 1.
// const btn1 = document.querySelector(".w");

// btn1.addEventListener("click",()=>{
//     const audio = new Audio("sounds/crash.mp3")
//     audio.play();
// })

// // 2.
// const btn2 = document.querySelector(".a");

// btn2.addEventListener("click",()=>{
//     const audio = new Audio("sounds/kick-bass.mp3")
//     audio.play();
// })

// // 3.
// const btn3 = document.querySelector(".s");

// btn3.addEventListener("click",()=>{
//     const audio = new Audio("sounds/snare.mp3")
//     audio.play();
// })

// // 4.

// const btn4 = document.querySelector(".d");

// btn4.addEventListener("click",()=>{
//     const audio = new Audio("sounds/tom-1.mp3")
//     audio.play();
// })

// // 5.

// const btn5 = document.querySelector(".j");

// btn5.addEventListener("click",()=>{
//     const audio = new Audio("sounds/tom-2.mp3")
//     audio.play();
// })

// // 6.

// const btn6 = document.querySelector(".k");

// btn6.addEventListener("click",()=>{
//     const audio = new Audio("sounds/tom-3.mp3")
//     audio.play();
// })

// // 7.

// const btn7 = document.querySelector(".l");

// btn7.addEventListener("click",()=>{
//     const audio = new Audio("sounds/tom-4.mp3")
//     audio.play();
// })

const btnNum = document.querySelectorAll(".drum").length;

for (let i = 0; i < btnNum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {
    var buttonInnerHtml = document.querySelectorAll("button")[i].innerHTML;
    buttonAnimation(buttonInnerHtml);
    makeSound(buttonInnerHtml);
  });
}
document.addEventListener("keydown", (event) => {
  buttonAnimation(event.key);

  makeSound(event.key);
});

function buttonAnimation(btn) {
  var buttonAc = document.querySelector(`.${btn}`);
  buttonAc.classList.add("pressed");
  setTimeout(() => {
    var buttonAc = document.querySelector(`.${btn}`);
    buttonAc.classList.remove("pressed");
  },200);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/0.mp3");
      audio1.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/1.mp3");
      audio1.play();
      break;
    case "s":
      var audio1 = new Audio("sounds/2.mp3");
      audio1.play();
      break;
    case "d":
      var audio1 = new Audio("sounds/3.mp3");
      audio1.play();
      break;
    case "j":
      var audio1 = new Audio("sounds/4.mp3");
      audio1.play();
      break;
    case "k":
      var audio1 = new Audio("sounds/5.mp3");
      audio1.play();
      break;
    case "l":
      var audio1 = new Audio("sounds/6.mp3");
      audio1.play();
      break;
    default:
      console.log(key);
      break;
  }
}
