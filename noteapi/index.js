const express=require('express')
const dotenv=require('dotenv')
// const logger=require('../noteapi/src/middleware/logger.js')
const noteRoute = require('./src/routes/note.route.js')
const app=express()
dotenv.config()



//middleware
app.use(express.json()) ;
// app.use(logger())

//features
app.use("/api/note",noteRoute)

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`The server is running in ${PORT}`);
})
module.exports=app