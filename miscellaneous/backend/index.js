const express=require("express");
const app=express();

const port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log("listening a port");
})

app.get("/register",(req,res)=>{
    let {username,password} =req.query;
    res.send(`Standard GET response Welcome ${username}`);
})

app.post("/register",(req,res)=>{
    let {username,password}=req.body;
    res.send(`Standard POST response ${username}`);
})