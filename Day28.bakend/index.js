const express =require("express");
const app =express();
let port=3000;
app.listen(port,()=>{
    console.log("app is listening on port 3000");
});
app.get("/",(req,res)=>{
    res.send("hallo, i am root path");
});
app.get("/apple",(req,res)=>{
    res.send("you contacted apple path");
});
app.get("/orange",(req,res)=>{
    res.send("you contacted orange path");
});
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.parems;
    let htmlSte ="<h1>Welcome to bakend devlopment @${username}!</h1>"
    // console.log(req.params);
    // res.send("you contacted mangow path");
});
app.get("*",(req,res)=>{
    req.send("this path does now exist");
});
// app.use((req,res)=>{
//     console.log("request recived");
//     let code="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });