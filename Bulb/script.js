let btn=document.querySelector("button");
let bulb=document.querySelector("#main");
let flag=0;
btn.addEventListener("click",function(){
    
    if(flag==0)
    {
        main.style.backgroundColor="yellow";
        flag=1;
    }
    else{
        main.style.backgroundColor="white";
        flag=0;
    }
})
