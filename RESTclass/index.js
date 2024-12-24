const express=require("express");
const app=express();
const port=8080;
const methodOverride=require("method-override");

const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
const  path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {

        id:uuidv4(),
        username:"tyagijii",
        content:"i love coding"
    },
    {
        id:uuidv4(),
        username:"vaibhavtyagi",
        content:"hardwork is important is achieve to success"
    },
    {
        id:uuidv4(),
        username:"karan",
        content:"i got selected for my 1st interview"
    }
]

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=> id === p.id);
    post.content=newcontent;
    console.log(post);
    res.send("patch request working");
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
    res.send("request working")
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id === p.id);
    res.render("edit.ejs",{ post });
})