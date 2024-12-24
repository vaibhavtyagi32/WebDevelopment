// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
    // if(internetSpeed>4){
    //     success();
    // }
    // else{
    //     failure();
    // }
// }
// savetoDb("vaibhav",()=>{
//     console.log("success your data was saved");
//     savetoDb("vaibhav",()=>{
//         console.log("Success2");
//         savetoDb("vaibhav",()=>{
//             console.log("success 3");
//         },()=>{
//             console.log("failure 3");
//         })
//     },()=>{
//         console.log("faliure 2");
//     });
// },()=>{
//     console.log("failure weak connection your does doesnot saved");
// });
function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success data saved");
        }
        else{
            reject("failure data doesnot saved");
        }
    })
}

savetoDb("hello").then((result)=>{
    console.log("data 1 saved");
    console.log("result of promise",result);
    return savetoDb("hello");
})
.then(()=>{
    console.log("data 2 saved");
    console.log("result of promise",result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error in promise",error);
});