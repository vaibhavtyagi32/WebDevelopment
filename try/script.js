let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let div=document.querySelector("#main");
    div.style.backgroundColor=randomcolor();
    let h=document.querySelector("h3");
    h.innerText=randomcolor();
})

function randomcolor(){
    let r=Math.floor(Math.random()*255+1);
    let g=Math.floor(Math.random()*255+1);
    let b=Math.floor(Math.random()*255+1);
    let randomcol=`rgb(${r},${g},${b})`;
    return randomcol;
}