const express=require("express");
const app=express();

const port=8080;
const path=require("path");
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log("listening on port");
})

app.get("/",(req,res)=>{
    res.render("Home.ejs");
})
app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{num:diceVal});
})

app.get("/ig/:username",(req,res)=>{
    // const followers=["adam","bob","steve","casey"];
    let {username}=req.params;
    // console.log(username);
    // res.render("instagram.ejs",{username,followers})

    const instaData=require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
    
})


app.get("/hello",(req,res)=>{
    res.send("hello");
})