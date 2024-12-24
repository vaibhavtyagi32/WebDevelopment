// let jsonRes='{"fact":"Cats dislike citrus scent.","length":26}';
// console.log(jsonRes);
// console.log(jsonRes.fact);
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);
// let jsObj={
//     "name":"vaibhav",
//     "rollno":23
// };
// console.log(jsObj);
// let jsonObj=JSON.stringify(jsObj);
// console.log(jsonObj);

// OUR FISRT REQUEST

// let url="https://catfact.ninja/fact";
// fetch(url).then((res)=>{
//     console.log(res);
//     res.json().then((data)=>{
//         console.log(data);
//     })
// })
// .catch((err)=>{
//     console.log("Error is :" + err);
// })

// let btn=document.querySelector("button");
// let para=document.querySelector("p");
// btn.addEventListener("click",async ()=>{
//     let facts=await getFacts();
//     console.log(facts);
//     para.innerText=facts;
// })

// let url="https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("ERROR :- ",e);
//         return "no fact found";
//     }
// }

let btn=document.querySelector("button");
let dog="https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async ()=>{
    let link=await getImages();
    let img=document.querySelector("img");
    img.setAttribute("src",link)
})


async function getImages(){
    try{
        let res=await axios.get(dog);
        return res.data.message;
    }
    catch(e){
        console.log("ERROR :-",e);
        return 'no image found';
    }
}