const express=require("express");
const app=express();
// console.dir(app);
let port =8080;
app.listen(port,()=>{
    console.log("app is listening on port");
})
// app.use((req,res)=>{
//     console.log("new incoming request");
//     // res.send("this is a basic response");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });
//     let code="<h1>Fruits</h1> <ul> <li>apple</li> <li>mango</li>";
//     res.send(code);
// })

app.get('/',(req,res)=>{
    res.send("you contacted root path");
})
// app.get('/apple',(req,res)=>{
//     res.send("you contacted apple path");
// })
// app.get('/orange',(req,res)=>{
//     res.send("you contacted orange path");
// })
// app.get('*',(req,res)=>{
//     res.send("this path does not exsit");
// })
// app.post('*',(req,res)=>{
//     res.send("you send a post request");
// })
app.get('/:username/:id',(req,res)=>{
    // console.log(req.params);
    let {username,id}=req.params;
    res.send(`welcome to the page of @${username}`);
})