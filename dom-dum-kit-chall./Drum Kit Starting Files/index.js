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

for(let i=0;i<=btnNum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",()=>{
            const audio = new Audio(`sounds/${i}.mp3`)
            audio.play();
    })};