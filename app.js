const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.static('static'))
const html=fs.readFileSync("./static/html.html");

app.get("/",(req,res)=>{
    res.status(200).end(html);
})

app.listen("3000",()=>{
    console.log("cal is running on port 3000 of docker");
})