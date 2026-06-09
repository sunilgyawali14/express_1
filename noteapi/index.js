const express=require('express')
const dotenv=require('dotenv')
const app=express()
const PORT=process.env.PORT || 3000
app.use(express.json()) 
app.get('/',(req,res)=>{
    res.send('this is home page ')
})
app.get('/about',(req,res)=>{
    res.json({
        "name":"sunil",
        "age":"22"
    })
})
app.listen(PORT,()=>{
    console.log(`The server is running in ${PORT}`);
})