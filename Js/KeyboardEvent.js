let input=document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log("code = ",event.code);
    if(event.code=="ArrowUp"){
        console.log("charcter moves upward");
    }
    else if(event.code=="ArrowLeft")
    {
        console.log("charcter moves left");
    }
    else if(event.code=="ArrowDown")
    {
        console.log("charcter moves downward");
    }
    else if(event.code=="ArrowRight")
    {
        console.log("charcter moves right");
    }
})
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
})
let user=document.querySelector("#user");
user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("inital value =");
    console.log("final value =",this.value)
})
let color=document.querySelector("#col");
color.addEventListener("click",function(){
    color.style.backgroundColor="green";
})