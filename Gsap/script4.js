var initalPath=`M 10 100 Q 500 100 990 100`;
var finalPath=`M 10 100 Q 500 100 990 100`;
var string=document.querySelector("#string");
string.addEventListener("mousemove",(delts)=>{
    let path=`M 10 100 Q ${delts.x} ${delts.y} 990 100`;
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})