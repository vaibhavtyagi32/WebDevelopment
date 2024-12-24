let div=document.querySelector("#center");
div.addEventListener("mousemove",function(details){
    let reactangleLocation=div.getBoundingClientRect();
    let insiderect=details.clientX - reactangleLocation.left;
    if(insiderect<reactangleLocation.width/2){
        div.style.backgroundColor="red";
    }
    else{
        div.style.backgroundColor="blue";
    }

})