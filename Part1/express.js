const express= require('express') // importing of the express from the package in the system


const app= express() 

app.get('/',(req,res)=>{
    res.send('This is the home page')

})
app.listen(5000,()=>{
    console.log('the server is running in the port 5000');
})