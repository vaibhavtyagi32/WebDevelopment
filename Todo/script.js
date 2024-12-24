let task=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=task.value;
    let deltbn=document.createElement("button");
    deltbn.innerText="delete";
    deltbn.classList.add("delete");
    item.appendChild(deltbn);
    ul.appendChild(item);
    task.value="";
})
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
// let delbtns=document.querySelectorAll(".delete");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//     let par=this.parentElement;
//     par.remove();
//     })
// }
