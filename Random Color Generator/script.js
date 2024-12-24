let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log("generate rando color");
// })


function getRandomColor(){
    let r=Math.floor(Math.random()*255)+1;
    let g=Math.floor(Math.random()*255)+1;
    let b=Math.floor(Math.random()*255)+1;
    let color=`rgb(${r},${g},${b})`;
    return color;

}
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor= getRandomColor();
    h3.innerText=randomcolor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
})