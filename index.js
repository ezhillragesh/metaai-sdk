const express=require('express')
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello")
})
posrt="ttf";
app.listen(3000,(req,res)=>{
    console.log(`App runnong in ${posrt}`);
})