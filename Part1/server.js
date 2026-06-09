// building the basic level of the server
// step1: import express  
const express= require('express')
// step2: instance of the express 
const app=express()
//Step 3: define port 
const PORT= process.env.PORT || 3000
// Step4: creating middleware
app.use(express.json())

//Step5: define route 
app.get('/', (req,res)=>{ 
    res.send('this is the home page...')
})

app.get('/about', (req,res)=>{
    res.json({
        "name":"sunil",
        "age":"22"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running in the ${PORT}`);
})