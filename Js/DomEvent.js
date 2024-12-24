// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     alert("Hello world")
// };

// btn.onclick = sayHello;

let btns=document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onClick=sayName;
    // btn.onmouseenter = function(){
    //     console.log("hello ");
    // }
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function() {
        console.log("chirayu");
    })
}
function sayHello(){
    alert("hello");
}
function sayName(){
    alert("Vaibhav Tyagi");
}

// let box=document.querySelector("#main");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside div");
// })

let para=document.querySelector("p");
let head=document.querySelector("h1");
// para.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// })
// head.addEventListener("click",function(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// })

function changecolor(){
    console.log(this.innerText);
    this.style.backgroundColor="blue";
}
para.addEventListener("click",changecolor);
head.addEventListener("click",changecolor);